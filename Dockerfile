# Use the official Node.js 12 image 
FROM node:12-alpine as build

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

FROM nginx:stable-alpine 

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]