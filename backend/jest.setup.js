"use strict";
// import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
// import { createConnection, getConnection, Connection} from 'typeorm';
// import { Users } from './src/db/Users';
// import { Todo } from './src/db/Todo';
// let container: StartedPostgreSqlContainer;
// var connection: Connection | undefined;
// global.beforeAll(async () => {
//   container = await new PostgreSqlContainer().start();
//   const connectionOptions = {
//     type: 'postgres' as const,
//     host: container.getHost(),
//     port: container.getPort(),
//     username: container.getUsername(),
//     password: container.getPassword(),
//     database: container.getDatabase(),
//     entities: [Users, Todo],
//     synchronize: true, // これによりテーブルが自動生成
//     logging: false,
//     dropSchema: true // テスト開始時にスキーマを削除
//   };
//   connection = await createConnection(connectionOptions);
//   if (connection) {
//     await connection.query('SET session_replication_role = \'replica\';');
//   }
//   // beforeEachの処理をここに移動
//   const entities = connection.entityMetadatas;
//   for (const entity of entities) {
//     const repository = connection.getRepository(entity.name);
//     await repository.clear();
//   }
//   // グローバル変数の割り当てもここで行う
//   (global as any).__TYPEORM_CONNECTION__ = connection;
// }, 60000);
// global.afterAll(async () => {
//   if (connection) {
//     await connection.query('SET session_replication_role = \'origin\';');
//   }
//   if (connection) {
//     await connection.close();
//   }
//   if (container) {
//     await container.stop();
//   }
// });
// global.beforeEach(async () => {
//   if (connection) {
//     // 明示的に外部キー制約を無効化してからテーブルをトランケート
//     await connection.query('ALTER TABLE todo DROP CONSTRAINT IF EXISTS todo_userid_fkey;');
//     await connection.query('TRUNCATE TABLE todo CASCADE;');
//     await connection.query('TRUNCATE TABLE users CASCADE;');
//     // 外部キー制約を再作成
//     await connection.query('ALTER TABLE todo ADD CONSTRAINT todo_userid_fkey FOREIGN KEY (userid) REFERENCES users(id);');
//   }
// });
// declare global {
//   var __TYPEORM_CONNECTION__: Connection | undefined;
// }
