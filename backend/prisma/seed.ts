// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // データベース接続テスト
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    return;
  }

  // 既存のデータを削除（オプション）
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  // ユーザーの作成
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      password: await bcrypt.hash('password123', 10),
      todos: {
        create: [
          {
            description: 'Todo 1 for user1'
          },
          {
            description: 'Todo 2 for user1'
          }
        ]
      }
    }
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      password: await bcrypt.hash('password456', 10),
      todos: {
        create: [
          {
            description: 'Todo 1 for user2'
          },
          {
            description: 'Todo 2 for user2'
          }
        ]
      }
    }
  });

  // テストユーザーのパスワードをハッシュ化
  const hashedPassword = await bcrypt.hash('password123', 10);

  // テストユーザーの作成
  const testUser = await prisma.user.upsert({
    where: { username: 'testuser' },
    update: {},
    create: {
      username: 'testuser',
      password: hashedPassword,
      todos: {
        create: [
          { description: 'Testuser todo 1' },
          { description: 'Testuser todo 2' }
        ]
      }
    },
    include: {
      todos: true
    }
  });

  console.log({ testUser });


  console.log('Created users:', { user1, user2 });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });