# Use the official Node.js image from Docker Hub
FROM node:18.16.0-alpine3.17

# Set the working directory inside the container
WORKDIR /opt/app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000 for the application to be accessed
EXPOSE 3000

# Start the application with PM2
CMD ["npm", "start"]
