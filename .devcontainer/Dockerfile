FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update && apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  x11vnc \
  xauth \
  novnc \
  fluxbox \
  dbus-x11 \
  x11-utils \
  x11-xserver-utils \
  && rm -rf /var/lib/apt/lists/*

# dockerグループの作成（既に存在する場合は無視）
RUN groupadd -f docker

# 新しいユーザーの作成とdockerグループへの追加
RUN usermod -aG docker node

# 作業ディレクトリの設定
WORKDIR /home/node

# ユーザーの切り替え
USER node

# Install global npm packages
RUN sudo npm install -g typeorm @types/node ts-node

# Set the working directory
WORKDIR /workspaces

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN sudo npm install ejs\
  express-validator

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000
