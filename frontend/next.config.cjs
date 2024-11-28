// next.config.js
// @ts-check
/*eslint-disable*/
/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  }
};