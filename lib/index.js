import { DynamoDB } from 'aws-sdk';
const dynamoDb = new DynamoDB.DocumentClient();
export const handler = async (event) => {
    const records = event.Records;
    for (const record of records) {
        const message = JSON.parse(record.body);
        const id = message.id;
        const data = { id, message };
        const params = {
            TableName: 'my-table',
            Item: data,
        };
        try {
            await dynamoDb.put(params).promise();
            console.log(`Successfully added item ${id} to DynamoDB`);
        }
        catch (err) {
            console.error(`Error adding item ${id} to DynamoDB: ${err}`);
        }
    }
};
//# sourceMappingURL=index.js.map