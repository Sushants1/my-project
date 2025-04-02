# Step 1: Use Node.js image
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies (force react-scripts installation)
RUN npm install --legacy-peer-deps && npm install react-scripts

# Copy source code
COPY . .

# Build React App
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

