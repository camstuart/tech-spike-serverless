import {SQSEvent, SQSHandler} from 'aws-lambda';
import * as AWS from 'aws-sdk';

const region = "ap-southeast-2"
const dynamoDB: AWS.DynamoDB = new AWS.DynamoDB({
    region,
    endpoint: "http://localhost:4566",
});

const s3Client = new AWS.S3({
    region,
    endpoint: 'http://s3.localhost.localstack.cloud:4566'
});

export const handler: SQSHandler = async (event: SQSEvent) => {
    const records = event.Records;
    for (const record of records) {
        const message = JSON.parse(record.body);

        console.log('myFunction invoked with SQS event body: ', message);

        dynamoDB.listTables({}, (err, data) => {
            if (err) {
                console.error('unable to list dynamodb tables with error:', err);
            } else {
                console.log('dynamodb tables listing:', data);
            }
        });

        s3Client.listObjectsV2({Bucket: 'my-bucket'}, (err, data) => {
            if (err) {
                console.error('unable to list s3 objects with error:', err);
            } else {
                console.log('s3 objects listing:', data);
            }
        });
    }
};