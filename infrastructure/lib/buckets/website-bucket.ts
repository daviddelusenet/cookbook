import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as iam from '@aws-cdk/aws-iam'

export class WebsiteBucket extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id)

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      blockPublicAccess: new s3.BlockPublicAccess({
        restrictPublicBuckets: false,
      }),
      websiteIndexDocument: 'index.html',
    })

    const websiteBucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${websiteBucket.bucketArn}/*`],
      principals: [new iam.AnyPrincipal()],
    })

    websiteBucket.addToResourcePolicy(websiteBucketPolicy)
  }
}
