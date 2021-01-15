import * as cdk from '@aws-cdk/core'
import * as dynamodb from '@aws-cdk/aws-dynamodb'
import * as lambda from '@aws-cdk/aws-lambda'

export class CookbookBackend extends cdk.Construct {
  public readonly cookbookHandler: lambda.Function

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id)

    const cookbookTable = new dynamodb.Table(this, 'CookbookTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING,
      },
    })

    this.cookbookHandler = new lambda.Function(this, 'CookbookHandler', {
      code: lambda.Code.fromAsset('lib/lambdas/cookbook-handler'),
      environment: {
        TABLE_NAME: cookbookTable.tableName,
      },
      handler: 'cookbook-handler.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    })

    cookbookTable.grantReadWriteData(this.cookbookHandler)
  }
}
