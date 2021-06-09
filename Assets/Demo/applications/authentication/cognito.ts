import { Construct } from "constructs";
import { CognitoUserPool, CognitoUserPoolClient } from "../../.gen/providers/aws";
import { TerraformOutput } from "cdktf";

interface MyStackConfig {
    prefix: string,
    environment: string,
    region: string;
}

interface MyAuthenticationClient {
    userpool : CognitoUserPool
}

export class MyAuthentication extends Construct implements MyAuthenticationClient{
    userpool : CognitoUserPool;
    
    constructor(scope: Construct, name: string, config: MyStackConfig){
        super(scope, name);
        
        const userpool = new CognitoUserPool(this, "APIGatewayCognitoUserPool", {
            name: config.prefix+"CognitoUserPool",
        })
        
        const client_userpool = new CognitoUserPoolClient(this, "APIGatewayCognitoUserPoolClient", {
            name: config.prefix+"CognitoUserPoolClient",
            userPoolId: userpool.id,
            generateSecret: false,
            preventUserExistenceErrors: 'ENABLED'
        })
        
        this.userpool = userpool;    
        
         new TerraformOutput(this, "user_pool_id", {
            value: userpool.id,
        });
        new TerraformOutput(this, "user_pool_client_id", {
            value: client_userpool.id,
        });
    }
}