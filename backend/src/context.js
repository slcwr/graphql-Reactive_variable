"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = createContext;
// src/context.ts
const database_1 = require("./datasources/database");
function createContext() {
    return {
        dataSources: {
            db: new database_1.DatabaseSource()
        }
    };
}
