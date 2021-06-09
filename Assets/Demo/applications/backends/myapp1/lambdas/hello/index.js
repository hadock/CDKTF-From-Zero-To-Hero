const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

exports.Handler = async (event) => {
    
    //El bug 1 podria estar por aqui
    const params = {
        TableName: process.env.DDB_TABLE,
        KeyConditionExpression: 'keyid = :hkey',
        ExpressionAttributeValues: {
            ':hkey': event.queryStringParameters.keyid
        }
    }
    
    const data = await docClient.query(params).promise();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            msg: "Hello from my NodeJS Lambda",
            items: data.Items
        })
    }
    
    return response
}