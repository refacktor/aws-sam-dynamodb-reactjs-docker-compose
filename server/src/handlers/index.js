const dynamodb = require("aws-sdk/clients/dynamodb");

const params = {};

if (process.env.DYNAMODB_ENDPOINT) {
  params.endpoint = process.env.DYNAMODB_ENDPOINT;
}

const dbClient = new dynamodb.DocumentClient(params);

const { TABLE_NAME } = process.env;
const PARTITION_KEY = "counter";
const SORT_KEY = new Date().toLocaleDateString();

exports.rootHandler = async (event) => {
  const { Item } = await dbClient
    .get({
      TableName: TABLE_NAME,
      Key: { pk: PARTITION_KEY, sk: SORT_KEY },
    })
    .promise();

  let count = 0;
  if (Item) {
    count = Item.count;
  }
  count += 1;

  await dbClient
    .put({
      TableName: TABLE_NAME,
      Item: {
        pk: PARTITION_KEY,
        sk: SORT_KEY,
        count,
      },
    })
    .promise();

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({ Item }),
  };
  return response;
};
