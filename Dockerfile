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

FROM nginx:1.19.1-alpine as production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
RUN echo 'server { listen 3000; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri /index.html; } }' > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]