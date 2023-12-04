FROM node:16.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000