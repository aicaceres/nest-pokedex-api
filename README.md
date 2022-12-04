<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>


## Description

Pokemon API clone bootstrapped with [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Getting Started

1. Clone the repository
2. Run
```
npm install
```
3. Install Nest CLI
```
npm i -g @nestjs/cli
```
4. Database set-up
```
docker-compose up -d
```
5. Clone __.en.template__ file and rename to __.env__
6. Fill in the variables with the respective values
7. Run in dev
```
npm run start:dev
```
8. Populate the database
```
http://localhost:3000/api/seed
```
## Stack
* Nest
* MongoDB
* Docker

# Production build
1. Make file ```.en.prod```
2. Fill in the variables for production
3. Build the image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```