import { Construct } from "constructs";
import {
  ApiGatewayDeployment,
} from "../../.gen/providers/aws";

import { MyAPI1 } from "../apis/myapi1"
import { TerraformOutput } from "cdktf";

interface MyStackConfig {
    prefix: string,
    environment: string,
    region: string;
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

export class MyAPIdeploy1 extends Construct{
    constructor(scope: Construct, name: string, config: MyStackConfig, api: MyAPI1) {
        super(scope, name);
        const deployment = new ApiGatewayDeployment(this,"api-gateway-deployment"+ID(), {
            restApiId: api.shared_api.properties.id!,
            stageName: config.environment,
            stageDescription: "Production Environment",
            description: "Production environment deployment",
            dependsOn: api.shared_api.dependencies,
        });
        
         new TerraformOutput(this, "endpoint", {
            value: deployment.invokeUrl,
        });
    }
}