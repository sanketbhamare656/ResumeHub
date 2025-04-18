# Use an official Node.js runtime as the base image
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure Vite is globally installed
RUN npm install -g vite

# Build the Vite project
RUN npm run build

# Expose the port that Vite serves the app on
EXPOSE 4173

# Start the application using Vite preview mode
CMD ["npm", "run", "preview"]
