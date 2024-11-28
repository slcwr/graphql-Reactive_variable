"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.UserAvgAggregate = exports.TodoSumAggregate = exports.TodoMinAggregate = exports.TodoMaxAggregate = exports.TodoGroupBy = exports.TodoCountAggregate = exports.TodoAvgAggregate = exports.CreateManyAndReturnUser = exports.CreateManyAndReturnTodo = exports.AggregateUser = exports.AggregateTodo = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateTodo_1 = require("./AggregateTodo");
Object.defineProperty(exports, "AggregateTodo", { enumerable: true, get: function () { return AggregateTodo_1.AggregateTodo; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var CreateManyAndReturnTodo_1 = require("./CreateManyAndReturnTodo");
Object.defineProperty(exports, "CreateManyAndReturnTodo", { enumerable: true, get: function () { return CreateManyAndReturnTodo_1.CreateManyAndReturnTodo; } });
var CreateManyAndReturnUser_1 = require("./CreateManyAndReturnUser");
Object.defineProperty(exports, "CreateManyAndReturnUser", { enumerable: true, get: function () { return CreateManyAndReturnUser_1.CreateManyAndReturnUser; } });
var TodoAvgAggregate_1 = require("./TodoAvgAggregate");
Object.defineProperty(exports, "TodoAvgAggregate", { enumerable: true, get: function () { return TodoAvgAggregate_1.TodoAvgAggregate; } });
var TodoCountAggregate_1 = require("./TodoCountAggregate");
Object.defineProperty(exports, "TodoCountAggregate", { enumerable: true, get: function () { return TodoCountAggregate_1.TodoCountAggregate; } });
var TodoGroupBy_1 = require("./TodoGroupBy");
Object.defineProperty(exports, "TodoGroupBy", { enumerable: true, get: function () { return TodoGroupBy_1.TodoGroupBy; } });
var TodoMaxAggregate_1 = require("./TodoMaxAggregate");
Object.defineProperty(exports, "TodoMaxAggregate", { enumerable: true, get: function () { return TodoMaxAggregate_1.TodoMaxAggregate; } });
var TodoMinAggregate_1 = require("./TodoMinAggregate");
Object.defineProperty(exports, "TodoMinAggregate", { enumerable: true, get: function () { return TodoMinAggregate_1.TodoMinAggregate; } });
var TodoSumAggregate_1 = require("./TodoSumAggregate");
Object.defineProperty(exports, "TodoSumAggregate", { enumerable: true, get: function () { return TodoSumAggregate_1.TodoSumAggregate; } });
var UserAvgAggregate_1 = require("./UserAvgAggregate");
Object.defineProperty(exports, "UserAvgAggregate", { enumerable: true, get: function () { return UserAvgAggregate_1.UserAvgAggregate; } });
var UserCount_1 = require("./UserCount");
Object.defineProperty(exports, "UserCount", { enumerable: true, get: function () { return UserCount_1.UserCount; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
var UserSumAggregate_1 = require("./UserSumAggregate");
Object.defineProperty(exports, "UserSumAggregate", { enumerable: true, get: function () { return UserSumAggregate_1.UserSumAggregate; } });
__exportStar(require("./args"), exports);
