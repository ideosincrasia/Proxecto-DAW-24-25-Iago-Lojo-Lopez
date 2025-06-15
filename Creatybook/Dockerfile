FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p public/images uploads
EXPOSE 3000
CMD ["npm", "start"]