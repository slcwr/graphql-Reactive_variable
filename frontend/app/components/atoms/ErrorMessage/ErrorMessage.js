"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ErrorMessage = styled_components_1.default.div `
  color: red;
  margin-top: 0.5rem;
`;
