visitor-counter
===

## Use Docker

### Backend

Build image.

```BASH
docker build -f backend.Dockerfile . -t visitor-counter
```

Start container.

```BASH
docker run -p 8080:8080 -d --name visitor-counter visitor-counter
```

Stop container.

```BASH
docker stop visitor-counter
```

Remove container.

```BASH
docker rm visitor-counter
```

Remove image.

```BASH
docker rmi visitor-counter
```

### Frondend

Build image.

```BASH
docker build -f frontend.Dockerfile . -t visitor-counter-ui
```

Start container.

```BASH
docker run -p 80:80 -d --name visitor-counter-ui visitor-counter-ui
```

Stop container.

```BASH
docker stop visitor-counter-ui
```

Remove container.

```BASH
docker rm visitor-counter-ui
```

Remove image.

```BASH
docker rmi visitor-counter-ui
```

## Use Docker Compose

Build images and start services.

```BASH
docker compose up -d
```

Remove containers and end services.

```BASH
docker compose down
```

Remove images.

```BASH
docker rmi visitor-counter_frontend visitor-counter_backend
```
