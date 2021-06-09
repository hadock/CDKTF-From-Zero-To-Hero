import { Construct } from "constructs";
import {
  ApiGatewayRestApi,
  ApiGatewayResource,
  ApiGatewayMethod,
  ApiGatewayAuthorizer
} from "../../.gen/providers/aws";

import { MyAuthentication } from '../authentication/cognito';

interface MyStackConfig {
    prefix: string,
    environment: string,
    region: string;
}

export interface SharedAPI {
  shared_api: {
    properties: ApiGatewayRestApi,
    resources: {
      "api-gateway-resource-hello": ApiGatewayResource
    },
    methods: {
      "api-gateway-get-hello": ApiGatewayMethod
    },
    dependencies: [any?]
  }
}

export class MyAPI1 extends Construct implements SharedAPI{
    shared_api: { properties: ApiGatewayRestApi; resources: { "api-gateway-resource-hello": ApiGatewayResource; }; methods: { "api-gateway-get-hello": ApiGatewayMethod; }; dependencies: [any?]; };
    
    constructor(scope: Construct, name: string, config: MyStackConfig, auth: MyAuthentication) {
        super(scope, name);
        
        const api = new ApiGatewayRestApi(this, "api-gateway", {
          name: config.prefix+"rest-api"
        });
        
        const authorizer = new ApiGatewayAuthorizer(this, "CognitoAuthorizer", {
          restApiId: api.id,
          name: "CognitoAuthorizer",
          type: "COGNITO_USER_POOLS",
          identitySource: "method.request.header.Authorization",
          providerArns: [auth.userpool.arn]
        });
        
        console.log('authorizer', authorizer.id);
        
        const resource = new ApiGatewayResource(this, "api-gateway-resource-hello", {
          restApiId: api.id!,
          parentId: api.rootResourceId,
          pathPart: "hello",
        });
        
        const method = new ApiGatewayMethod(this, "api-gateway-get-hello", {
          restApiId: api.id!,
          resourceId: resource.id!,
          httpMethod: "GET",
          authorization: "NONE"
          //authorization: "COGNITO_USER_POOLS",
          //authorizerId: authorizer.id
        });
        
        
        
        this.shared_api = {
          properties: api,
          resources : {
            "api-gateway-resource-hello" : resource
          },
          methods : {
            "api-gateway-get-hello" : method
          },
          dependencies : [method]
        }
    }
}