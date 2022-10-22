# AWS Sam Docker Compose Example

## Run

```bash
export COMPOSE_PROJECT_NAME="aws-sam-docker-compose-example-test"
export DOCKER_DEFAULT_PLATFORM=linux/amd64

docker-compose up --build
```

## Frontend

- Go to http://localhost:3001/

## Test the API

```bash
curl http://127.0.0.1:3000/
```

```output
{}
```

```bash
curl http://127.0.0.1:3000/
```

```output
{"Item":{"sk":"10/22/2022","count":1,"pk":"counter"}}
```

```bash
curl http://127.0.0.1:3000/
```

```output
{"Item":{"sk":"10/22/2022","count":2,"pk":"counter"}}
```
