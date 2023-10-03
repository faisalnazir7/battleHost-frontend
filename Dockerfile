FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build your Vite app for production
RUN npm run build

# Expose the port your app will run on (default for Vite is 3000)
EXPOSE 3000

# Define the command to run app
CMD ["npm", "start"]