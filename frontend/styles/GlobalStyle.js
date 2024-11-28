"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
// src/styles/GlobalStyle.ts
const styled_components_1 = require("styled-components");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
