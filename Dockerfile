# Use the official Node.js 12 image 
FROM node:12.22.8 as build

# Create and change to the app directory
WORKDIR /app

COPY . .

# Install dependencies
RUN npm install

# Build the react app
RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]