import { UserController } from '../src/controllers/userController';
import { getConnection } from 'typeorm';
import { Users } from '../src/entity/Users';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { describe, expect, beforeEach, jest, it } from '@jest/globals';

describe('UserController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject: Record<string, any> = {};
  //let responseObject: { [key: string]: any } = {};

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
        status: jest.fn().mockReturnThis() as jest.MockedFunction<(code: number) => Response>,
        json: jest.fn().mockImplementation((result: any) => {
          responseObject = result;
    })as jest.MockedFunction<Response['json']>,
   }
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      mockRequest.body = { username: 'testuser', password: 'password123' };

      await UserController.createUser(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(responseObject).toHaveProperty('message', 'ユーザーが正常に作成されました');
      expect(responseObject).toHaveProperty('userId');

      // データベースに保存されたことを確認
      const connection = getConnection();
      const savedUser = await connection.manager.findOne(Users, { where: { username: 'testuser' } });
      expect(savedUser).toBeTruthy();
      expect(savedUser?.username).toBe('testuser');
    });
  });

  describe('login', () => {
    it('should login successfully with correct credentials', async () => {
      // テストユーザーを作成
      const connection = getConnection();
      const hashedPassword = await bcrypt.hash('password123', 10);
      await connection.manager.save(Users, { username: 'testuser', password: hashedPassword });

      mockRequest.body = { username: 'testuser', password: 'password123' };

      await UserController.login(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(responseObject).toHaveProperty('success', true);
      expect(responseObject).toHaveProperty('message', 'ログイン成功');
      expect(responseObject.user).toHaveProperty('username', 'testuser');
    });

    it('should fail login with incorrect credentials', async () => {
      mockRequest.body = { username: 'testuser', password: 'wrongpassword' };

      await UserController.login(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(responseObject).toHaveProperty('message', 'ユーザー名またはパスワードが間違っています');
    });
  });

  // 他のメソッド（updateUser, deleteUser, getAllUsers）のテストも同様に追加
});