"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
// src/components/atoms/Title/Title.tsx
const styled_components_1 = __importDefault(require("styled-components"));
exports.Title = styled_components_1.default.h1 `
  text-align: center; // 水平方向の中央寄せ
  margin-left: auto;  // 左右のマージンを自動で調整
  margin-right: auto; // 左右のマージンを自動で調整
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
