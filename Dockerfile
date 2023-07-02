# Use the official Node.js 12 image 
FROM node:12.22.8 as build

# Create and change to the app directory
WORKDIR /app

# Copy package.json and lock file 
COPY package.json package-lock.json ./

# Install dependencies 
RUN npm install

# Copy source code 
COPY . .

# Build the React app for production 
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]