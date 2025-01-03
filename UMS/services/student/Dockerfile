# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY src/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the src folder
COPY src/ .

# Expose the port the app will run on
EXPOSE 5003

# Command to start the app
CMD ["npm", "start"]
