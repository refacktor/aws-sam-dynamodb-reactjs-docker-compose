#!/bin/bash

set -e

cd database
echo "Installing aws-sdk"
npm i aws-sdk

echo "Creating table"
node ./create-db.js

cd ../server
sam local start-api \
    --host 0.0.0.0 \
    --container-host-interface 0.0.0.0 \
    --container-host host.docker.internal \
    --debug \
    --docker-volume-basedir "$PWD" \
    --docker-network=aws-sam-docker-compose-example-test_default \
    --region=eu-west-1
