# Use the official Node.js 12 image 
FROM node:12

# Create and change to the app directory
WORKDIR /app

# Copy package.json and lock file 
COPY package.json yarn.lock ./

# Install dependencies 
RUN yarn install

# Copy source code 
COPY . .

# Build the React app for production 
RUN yarn build

# Expose port 80 
EXPOSE 80

# Serve the app 
CMD ["yarn", "start"]
