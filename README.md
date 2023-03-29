# tech-spike-serverless

The project is a tech-spike to test the following capabilities for a typescript aws lambda function:

1. [X] Local development with serverless-offline:
1. [X] SQS invoked lambda function
1. [X] Local DynamoDB table creation and seeding (via `./offline/create-local-resources.sh`)
1. [X] Local S3 bucket creation and seeding (via `./offline/create-local-resources.sh`)
1. [X] Local DynamoDB list tables from lambda function
1. [X] Local S3 list object from lambda function
1. [X] Ability to run lambda function with in debug mode with ide breakpoints: WebStorm
1. [ ] Ability to run lambda function with in debug mode with ide breakpoints: VSCode
1. [ ] jest 'integration' tests that confirm an SQS event triggers the lambda which in turn writes to a dynamodb table

## Setup shell notes

```bash
nvm install v18.15.0
npm install -g serverless
serverless create --template aws-nodejs-typescript --path tech-spike-serverless
cd tech-spike-serverless
yarn add aws-sdk aws-sdk-mock 
yarn add --dev serverless-dynamodb-local serverless-offline
```

### Local development with serverless-offline, SQS invoked lambda function

```bash
nvm use 18.15.0
yarn install
cd offline
docker-compose up -d
./create-local-resources.sh
cd ..
```
Recommended:

```bash
yarn run run:local
```

Or:

```bash
serverless invoke local --function myFunction --path ./offline/sqs-event.json
```

### Debugging in WebStorm:

Webstorm will automatically detect/create a run configuration in `package.json`\
Meaning you will be able to click the 'play' button (or right click for debug options) next to the\
`run:local` script in `package.json` to run the function locally.

### Debugging in VSCode:

_WIP_

### Running tests

_WIP_

[See issues here](https://github.com/camstuart/tech-spike-serverless/issues)