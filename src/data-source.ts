// data-source.ts
import "reflect-metadata";
import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { Users } from "./entity/Users.js";
import { Todo } from "./entity/Todo.js";
import * as dotenv from 'dotenv';

dotenv.config();

 const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  logger: "advanced-console",
  entities: [Users, Todo],
  migrations: ["src/migration/**/*.ts"],
  subscribers: [],
};

export default connectionOptions;

// 接続を作成する関数をエクスポート
export const createDatabaseConnection = () => createConnection(connectionOptions);

let connection: Connection;

export async function initializeDatabase(): Promise<Connection> {
  if (!connection) {
    try {
      connection = await createConnection(connectionOptions);
      console.log('Database connection established');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
  return connection;
}

export const getConnection = async (): Promise<Connection> => {
  if (!connection) {
    try {
      connection = await createConnection(connectionOptions);
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
  return connection;
};

