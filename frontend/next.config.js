// next.config.js
// @ts-check
/*eslint-disable*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  }
}

export default nextConfig