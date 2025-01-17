# Step 1: Use the official Node.js image as a base image
FROM node:latest

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install 

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose the port the app will run on
EXPOSE 3000

# Step 8: Start the Next.js app in production mode
CMD ["npm", "start"]
