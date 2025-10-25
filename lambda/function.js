const AWS = require('aws-sdk');
const s3 = new AWS.S3({ endpoint: 'http://localhost:4566', s3ForcePathStyle: true });

exports.handler = async (event) => {
    const bucketName = 'my-test-bucket';
    const key = 'hello.txt';
    const body = 'Hello from the LocalStack Lambda!';

    // Put object in S3
    await s3.putObject({ Bucket: bucketName, Key: key, Body: body }).promise();

    // Get object from S3
    const data = await s3.getObject({ Bucket: bucketName, Key: key }).promise();

    return {
        statusCode: 200,
        body: data.Body.toString('utf-8')
    };
};
