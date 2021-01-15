import * as apiGateway from '@aws-cdk/aws-apigateway'
import * as cdk from '@aws-cdk/core'
import { CookbookBackend } from './cookbook-backend'
import { WebsiteBucket } from './buckets/website-bucket'

export class CookbookStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const appBucket = new WebsiteBucket(this, 'AppBucket')
    const cookbookBackend = new CookbookBackend(this, 'CookbookBackend')

    new apiGateway.LambdaRestApi(this, 'RecipeEndpoint', {
      handler: cookbookBackend.cookbookHandler,
    })
  }
}
