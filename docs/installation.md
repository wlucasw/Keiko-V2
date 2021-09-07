## Installation

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

The project should now be running at [http://localhost:8000](http://localhost:8000). If the installation went well, you should see a swagger. Calling the endpoint GET /pokemon?page=1 should return a list of pokemons if your database was well populated

## Hot reload

The hot reload should work out of the box.
If it doesn't work on Ubuntu, it may be because the max_user_watches is too low.
You can increase it to its max value using this command:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
