/// <reference types="cypress" />
import { mocks } from '../../tests/mocks/handlers';

describe('ログインテスト', () => {
    beforeEach(() => {
      // モックデータを使用してGraphQLリクエストをインターセプト
      cy.intercept('POST', 'http://localhost:4001/graphql', (req) => {
        const mock = mocks.find(m => 
          m.request.query === req.body.query && 
          JSON.stringify(m.request.variables) === JSON.stringify(req.body.variables)
        );
        
        if (mock && mock.result && 'data' in mock.result) {
            req.reply({
              statusCode: 200,
              body: {
                data: mock.result.data
              }
            });
          } else {
            // モックが見つからない場合のデフォルトレスポンス
            req.reply({
              statusCode: 404,
              body: {
                errors: [{ message: 'No matching mock found' }]
              }
            });
          }
        });
        });
      });
 
  
    it('ログインが成功するケース', () => {
      // ログインページにアクセス
      cy.visit('http://localhost:3000/login');
  
      // フォームに入力
      cy.get('[data-testid="username-input"]').type('testuser');
      cy.get('[data-testid="password-input"]').type('password123');
  
      // ログインボタンをクリック
      cy.get('[data-testid="login-button"]').click();
  
      // ダッシュボードにリダイレクトされることを確認
      //cy.url().should('include', '/todo');
  
      // ローカルストレージにトークンが保存されていることを確認
      //cy.window().its('localStorage.token').should('exist');
    });
  
    // it('ログインが失敗するケース - パスワードが間違っている', () => {
    //   cy.visit('http://localhost:3000/login');
  
    //   cy.get('[data-testid="username-input"]').type('testuser');
    //   cy.get('[data-testid="password-input"]').type('wrongpassword');
    //   cy.get('[data-testid="login-button"]').click();
  
    //   // エラーメッセージが表示されることを確認
    //   cy.get('[data-testid="error-message"]')
    //     .should('be.visible')
    //     .and('contain', 'Invalid password');
    // });
