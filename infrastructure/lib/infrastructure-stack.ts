import * as cdk from '@aws-cdk/core'
import { WebsiteBucket } from './buckets/website-bucket'

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const appBucket = new WebsiteBucket(this, 'AppBucket')
  }
}
