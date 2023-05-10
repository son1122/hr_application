FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE <your_project_port>

CMD ["npm", "run", "<your_project_script>"]
