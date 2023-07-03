# Use the official Node.js 12 image 
FROM node:12.22.8 as build

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the react app
RUN npm run build

CMD ["node", "server.js"]