## Description

This application is ready for scrapping meneame.net web site using nest.js, puppertirer and mongoDb.

## Installation

```bash
$ npm install
```

## Running the app with Docker

```bash
# Container image
$ docker container up

```

## Postman

<ol>
  <li>GET All: Launch GET request to http://localhost:3000/</li>
  <li><p>GET URL data: Launch GET request to http://localhost:3000/url-data with next params in body request.</p>

    { "url": "https://www.meneame.net/"}

  </li>
  
  <li>POST: Launch POST request to http://localhost:3000/scrape-url with next params in body request.

    { "url": "https://www.meneame.net/"}

  </li>
  
</ol>

## Running the app

!! Ensure to set Mongo URI in the `url.module.ts` to localhost to test the app with a local db

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
