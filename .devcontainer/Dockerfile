FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install additional tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends postgresql-client

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
