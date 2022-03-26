# FROM node:16.14.2-alpine
# RUN addgroup app && adduser -S -G app app
# USER app
# WORKDIR /app
# COPY --chown=app:node package*.json ./
# RUN npm install
# COPY --chown=app:node . .
# CMD ["npm", "run", "start"]


# FROM node:16.14.2-alpine

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./

# RUN npm config set unsafe-perm true
# RUN npm install --silent

# COPY . .

# RUN chown -R node /app/node_modules

# USER node

# CMD ["npm", "run", "start"]


FROM node:16.14.2-alpine
WORKDIR /app
COPY . ./
CMD ["npm", "run", "start"]