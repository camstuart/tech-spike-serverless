# tech-spike-serverless

The project is a tech-spike to test the following capabilities for a typescript aws lambda function:

1. [x] Local development with serverless-offline:
2. [X] SQS invoked lambda function
3. [ ] DynamoDB table creation and seeding from `serverless.yml`
4. [ ] DynamoDB write record from lambda
5. [ ] Ability to run lambda function with in debug mode with ide breakpoints
6. [ ] jest 'integration' tests that confirm an SQS event triggers the lambda which in turn writes to a dynamodb table

## Setup shell notes

```bash
nvm install v18.15.0
npm install -g serverless
serverless create --template aws-nodejs-typescript --path aws-serverless-nodejs-typescript-lamdba-sqs-dynamodb
cd aws-serverless-nodejs-typescript-lamdba-sqs-dynamodb
yarn add aws-sdk aws-sdk-mock 
yarn add --dev serverless-dynamodb-local serverless-offline
```

## Working so far

### (1 & 2) Local development with serverless-offline, SQS invoked lambda function

```bash
nvm use 18.15.0
yarn install
serverless invoke local --function myFunction --path sqs-event.json
```

## Partly working, requires attention

### DynamoDB integration (write)

Note: Assumes you have `direnv` to load environment variables in `.env` file

```bash
Error adding item 1 to DynamoDB: UnrecognizedClientException: The security token included in the request is invalid
```

```bash
docker-compose -f docker-compose.local.yml up -d # or without -d to see logs, but requires separate terminal window
serverless invoke local --function myFunction --path sqs-event.json
```
