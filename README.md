# tech-spike-serverless

The project is a tech-spike to test the following capabilities for a typescript aws lambda function:

1. [X] Local development with serverless-offline:
1. [X] SQS invoked lambda function
1. [ ] DynamoDB table creation and seeding from `serverless.yml`
1. [ ] DynamoDB write record from lambda
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

### (1 & 2) Local development with serverless-offline, SQS invoked lambda function

```bash
nvm use 18.15.0
yarn install
```
Recommended:

```bash
yarn run run:local
```

Or:

```bash
serverless invoke local --function myFunction --path sqs-event.json
```

### Debugging in webstorm:

Webstorm will automatically detect/create a run configuration in `package.json`\
Meaning you will be able to click the 'play' button (or right click for debug options) next to the\
`run:local` script in `package.json` to run the function locally.


### DynamoDB integration (write)

Note: Assumes you have `direnv` to load environment variables in `.env` file


```bash
docker-compose -f docker-compose.local.yml up -d # or without -d to see logs, but requires separate terminal window
serverless invoke local --function myFunction --path sqs-event.json
```

[See issues here](https://github.com/camstuart/tech-spike-serverless/issues)