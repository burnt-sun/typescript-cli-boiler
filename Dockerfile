# Step 1: Use an official Node.js base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json files to the working directory
COPY * ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY ./src ./src
COPY ./data ./data

# Step 6: Run the TypeScript script using ts-node
CMD ["npm", "start"]