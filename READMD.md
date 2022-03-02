visitor-counter
===

# Backend

```BASH
docker build -f backend.Dockerfile . -t visitor-counter
docker run -p 8080:8080 -d --name visitor-counter visitor-counter
```

# Frondend

```BASH
docker build -f frontend.Dockerfile . -t visitor-counter-ui
docker run -p 80:80 -d --name visitor-counter-ui visitor-counter-ui
```
