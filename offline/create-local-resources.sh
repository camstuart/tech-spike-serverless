echo "Make S3 bucket 🪣"
awslocal s3 mb s3://my-bucket/

echo "Upload file to S3 bucket 📤"
awslocal s3 cp s3document.json s3://my-bucket/

echo "Create dynamodb table 📊"
awslocal dynamodb create-table \
    --table-name my-table \
    --attribute-definitions AttributeName=MyId,AttributeType=S AttributeName=Name,AttributeType=S \
    --key-schema AttributeName=MyId,KeyType=HASH AttributeName=Name,KeyType=RANGE \
    --billing-mode PAY_PER_REQUEST

echo "local AWS resources created... ✅"