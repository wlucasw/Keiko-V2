# Installation

In development:
- webpack-dev-server listens on the port 3000
  - it serves your frontend app's bundle.js
  - it manages hot reloading


To build the application, launch:
```bash
docker-compose build
```

## Start the app

What you need to do to (re)start the project:

- :warning: If running on a windows machine
  - Make sure you cloned the project using [gitbash](https://gitforwindows.org/) (It handles encoding issues between unix and windows automatically)
  - Replace the `scripts/start` node of `frontend/package.json` with this command:
    ```
    set \"REACT_APP_ENV=local\" && set \"NODE_PATH=src/\" && react-app-rewired start
    ```

- start the frontend:
  ```bash
  cd frontend
  yarn
  yarn start
  ```

  The project should now be running at [localhost:3000](http://localhost:3000).

- start backend and frontend:
  ```bash
  docker-compose up -d
  ```
- populate your database:
  ```bash
  make populate-db
  ```

The project should now be running at [https://localhost](https://localhost).
