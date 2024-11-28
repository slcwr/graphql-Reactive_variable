"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
// src/app/layout.tsx
const react_1 = __importDefault(require("react"));
const providers_1 = require("./providers");
function RootLayout({ children, }) {
    return (<html lang="en">
      <body>
        <providers_1.Providers>
          {children}
        </providers_1.Providers>
      </body>
    </html>);
}
