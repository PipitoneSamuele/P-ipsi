## Runnare l'app da locale:
- docker compose up -d in root per MongoDB
- ng serve in client per client
- ./mvnw spring-boot:run per backend 

## WIP:
- General:
  - Script to run every service or dockerized environment
  - Build various proxies and envs to create 2 environment, like local and dev
- Film:
    - Search bar with various filters like: watch date, ratings, ecc.
    - Add a watched film with support of external systems like imdb, especially for image URL