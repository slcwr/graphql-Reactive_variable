FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# dockerグループの作成（既に存在する場合は無視）
RUN groupadd -f docker

# 新しいユーザーの作成とdockerグループへの追加
RUN usermod -aG docker node

# 作業ディレクトリの設定
WORKDIR /home/node

# ユーザーの切り替え
USER node

# Install global npm packages
RUN npm install -g typeorm @types/node ts-node

# Set the working directory
WORKDIR /workspaces

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install ejs\
  express-validator

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000
