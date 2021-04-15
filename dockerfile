FROM node:14-alpine

COPY . .
RUN npm i  && npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]