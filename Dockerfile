FROM node:20-alpine

WORKDIR /usr/app

COPY . .

COPY public ./public
COPY package.json .
COPY package-lock.json .

RUN npm install --omit=dev --ignore-scripts && npm run build && npm ci --omit=dev --ignore-scripts

ENV NEXT_SHARP_PATH=./node_modules/sharp

EXPOSE 3000

CMD ["npm", "start"]
