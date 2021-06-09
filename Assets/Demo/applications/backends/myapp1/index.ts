import * as path from "path";
import { Construct } from "constructs";
import {
  IamRole,
  IamRolePolicy,
  LambdaFunction,
  ApiGatewayIntegration,
  DynamodbTable,
  LambdaPermission,
  DataAwsRegion,
  DataAwsCallerIdentity
} from "../../../.gen/providers/aws";

import { TerraformAsset, AssetType } from "cdktf";

import { MyAPI1 } from "../../apis/myapi1"

interface MyStackConfig {
    prefix: string,
    environment: string,
    region: string;
}

export class MyApp1 extends Construct {
  constructor(scope: Construct, name: string, config: MyStackConfig, myapi: MyAPI1) {
    super(scope, name);

    const role = new IamRole(this, "basic_lambda_role", {
        description: "Basic Lambda Execution Role",
        assumeRolePolicy: JSON.stringify({ 
            "Version": "2012-10-17", 
            "Statement": [ {
                "Action": "sts:AssumeRole", 
                "Principal": { 
                    "Service": "lambda.amazonaws.com" 
                }, 
                "Effect": "Allow", 
                "Sid": "" 
            }] 
        }),
        
    });
    
    const ddb_hello = new DynamodbTable(this, "ddbHelloTable", {
      name: "ddbHelloTable",
      billingMode: "PAY_PER_REQUEST",
      hashKey: "keyid",
      attribute: [
        {name: "keyid", type: "S"}
      ]
    });

    new IamRolePolicy(this, "LambdaBasicInlineExcecution", {
      dependsOn: [role],
      name: config.prefix+"PermissionsForLambda",
      policy : JSON.stringify({
            "Version": "2012-10-17",
            "Statement": [
                {
                  "Effect": "Allow",
                  "Action": [
                      "logs:CreateLogGroup",
                      "logs:CreateLogStream",
                      "logs:PutLogEvents"
                  ],
                  "Resource": "*"
                },
                {
                  "Sid": "VisualEditor0",
                  "Effect": "Allow",
                  "Action": "dynamodb:Query",
                  "Resource": ddb_hello.arn
                }
            ]
        }),
      role: role.name
    });
    
    const lambda_file = new TerraformAsset(this, "hello-source-code", {
      path: path.resolve(__dirname, "lambdas/hello"),
      type: AssetType.ARCHIVE
    });
    
    const fn = new LambdaFunction(this, "lambda-hello-world", {
      functionName: "helloWorlddb",
      handler: "index.Handler",
      runtime: "nodejs12.x",
      description: "This is our first lambda in myapp1",
      role: role.arn,
      timeout: 61,
      filename: lambda_file.path,
      sourceCodeHash: lambda_file.assetHash,
      environment: [
        { variables: {"DDB_TABLE": ddb_hello.name}}
      ]
    });

    const integration = new ApiGatewayIntegration(this, "api-gateway-integration", {
      restApiId: myapi.shared_api.properties.id!,
      resourceId: myapi.shared_api.resources["api-gateway-resource-hello"].id!,
      httpMethod: myapi.shared_api.methods["api-gateway-get-hello"].httpMethod,
      integrationHttpMethod: "POST",
      type: "AWS_PROXY",
      uri: fn.invokeArn,
      dependsOn: [myapi.shared_api.methods["api-gateway-get-hello"]],
    });
    
    myapi.shared_api.dependencies.push(integration);

    const region = new DataAwsRegion(this, "region");
    const userId = new DataAwsCallerIdentity(this, "userId");

    new LambdaPermission(this, "apigw-lambda-permission", {
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      functionName: fn.functionName,
      sourceArn: `arn:aws:execute-api:${region.name}:${userId.accountId}:${myapi.shared_api.properties!.id}/*/${myapi.shared_api.methods!["api-gateway-get-hello"].httpMethod+myapi.shared_api.resources!["api-gateway-resource-hello"].path}`,
    });

  }
}