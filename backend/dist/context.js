// src/context.ts
import { DatabaseSource } from './datasources/database';
export function createContext() {
    return {
        dataSources: {
            db: new DatabaseSource()
        }
    };
}
//# sourceMappingURL=context.js.map