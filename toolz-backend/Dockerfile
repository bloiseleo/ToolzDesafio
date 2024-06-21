FROM node:20.13.1
WORKDIR app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=root
ENV DB_PASSWORD=root
ENV DB_DATABASE=root
EXPOSE 8080
CMD [ "npm", "run", "start:prod" ]