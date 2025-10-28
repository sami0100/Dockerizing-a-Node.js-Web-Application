# Use the official Node.js image from Docker Hub
FROM node:18.16.0-alpine3.17

# Set the working directory inside the container
WORKDIR /opt/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application using PM2
CMD ["pm2", "start", "bin/www", "--no-daemon"]
