import {
  DeleteItemCommand,
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
  ScanCommandOutput,
} from '@aws-sdk/client-dynamodb'
import { v4 as uuidv4 } from 'uuid'

const tableName = process.env.TABLE_NAME || ''
const dynamo = new DynamoDBClient({})

export const createResponse = (
  body: string | ScanCommandOutput['Items'],
  statusCode = 200
) => ({
  statusCode,
  body: JSON.stringify(body, null, 2),
})

const getAllRecipes = async () =>
  dynamo.send(
    new ScanCommand({
      TableName: tableName,
    })
  )

const addRecipe = async () =>
  dynamo.send(
    new ScanCommand({
      TableName: tableName,
    })
  )

exports.handler = async (event: AWSLambda.APIGatewayEvent) => {
  try {
    const { body, httpMethod } = event

    if (httpMethod === 'GET') {
      const response = await getAllRecipes()

      return createResponse(response.Items)
    }

    if (httpMethod === 'POST') {
      const response = await addRecipe()

      return createResponse(response.Items)
    }
  } catch (error) {
    console.log(error)
    return createResponse(error, 500)
  }
}
