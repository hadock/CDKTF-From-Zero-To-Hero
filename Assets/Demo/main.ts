import { Construct } from 'constructs'
import { App, TerraformStack } from 'cdktf'
import { AwsProvider } from './.gen/providers/aws'
import { MyApp1 } from './applications/backends/myapp1';
import { MyAPI1 } from './applications/apis/myapi1'
import { MyAPIdeploy1 } from './applications/apis/apideploy';
import { MyAuthentication } from './applications/authentication/cognito';

interface MyStackConfig {
  prefix: string,
  environment: string,
  region: string;
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: MyStackConfig) {
    super(scope, id)

    new AwsProvider(this, 'aws', {
      region: config.region,
    })
    
    /**
     * 
     * Creacion del servicio de autenticacion usando cognito
     * 
     * */
    const Authentication = new MyAuthentication(this, 'Authentication', config);
    
    /**
     * Creacion y especificacion de la API
     * 
     * */
    const API = new MyAPI1(this, 'API', config, Authentication);
    
    /**
     * Creacion de mis aplicaciones backend
     * 
     * */
    new MyApp1(this, 'Hello', config, API);
    
    /**
     * Despliegue de la api al stage del environment en la configuracion
     * 
     * */
    new MyAPIdeploy1(this, 'APIDeploy', config, API);
    
  }
}

const app = new App()
new MyStack(app, 'PoC1', {environment: "prod", region: "us-west-1", prefix: ""});
app.synth();
