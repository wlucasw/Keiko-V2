# Debugging

Xdebug is already installed and configured on the php Docker container.

## Configure your browser

- [Install and configure the xdebug browser extension](https://www.jetbrains.com/help/phpstorm/browser-debugging-extensions.html)

## Configure the container

- Check in your docker-compose.yml that you have specified the same IDE key as above

```yaml
services:
  php:
    environment:
      # Specify here the IDE_KEY used in your browser
      PHP_IDE_CONFIG: serverName=YOUR_IDE_KEY
```

- If you use a macOS, replace in your docker/php/xdebug.ini

```yaml
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.discover_client_host=yes
xdebug.client_port=9000
```

by

```yaml
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.discover_client_host=yes
xdebug.client_port=9000
xdebug.client_host=host.docker.internal
```

## Configure your IDE

### PHPStorm

- Add a server to do the mapping between the container and your project files. The name should be the same as the IDE key specified in your browser.
  Don't change the port as it is related with XDebug, not your application
  ![alt text](./phpstorm-server-config.png "PHPStorm server config")
- Start listening to Xdebug connections
- Add a breakpoint on your index.php
- Enjoy 😉
