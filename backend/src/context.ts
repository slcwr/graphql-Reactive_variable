// src/context.ts
import { DatabaseSource } from './datasources/database';

export interface Context {
  dataSources: {
    db: DatabaseSource;
  };
}

export function createContext(): Context {
  return {
    dataSources: {
      db: new DatabaseSource()
    }
  };
}