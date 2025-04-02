FROM node:18

WORKDIR /app

# Copy only package.json first (avoid missing file error)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

EXPOSE 5000
CMD ["node", "src/app.js"]

