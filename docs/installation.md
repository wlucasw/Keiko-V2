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

- start the frontend:
  ```bash
  cd frontend
  yarn install
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

## Hot reload

The hot reload should work out of the box.
If it doesn't work on Ubuntu, it may be because the max_user_watches is too low.
You can increase it to its max value using this command:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
