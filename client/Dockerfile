FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
USER node
RUN npm i
CMD ["npm", "run", "start"]
