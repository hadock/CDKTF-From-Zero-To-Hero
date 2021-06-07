## CDK For Terraform - From Zero to Hero (UNDER CONSTRUCTION)

En este workshop instalaremos y configuraremos todo lo necesario para utilizar `cdktf`, el cli desarrollado por Hashicorp y AWS, que nos permitirá realizar todas las operaciones necesarias para que nuestra infraestructura como código (escrita en TypeScript para este workshop) sea desplegada mediante terraform.
Utilizaremos AWS Cloud9, por lo que no olvides leer los pre-requisitos y seguir los pasos para tener nuestro ambiente preparado para trabajar.

En esta arquitectura desplegaremos una aplicación serverless que utilizará [AWS Lambda][lambda], [Amazon API Gateway][api-gw], [Amazon DynamoDB][dynamodb], [Amazon Cognito][cognito]. El objectivo de este workshop es que entiendas lo necesario sobre los objetos y clases que nos permitirán en un lenguaje amigable para un desarrollador, desplegar arquitecturas usando AWS Lambda como nuestro backend y expuestos de forma segura con API Gateway, luego Amazon Cognito provee las funciones de administración de usuarios y autenticación para asegurar el backend y finalmente, DynamoDB provee la capa de persistencia de datos donde nuestro backend puede almacenar y consultar por esta información.

### Pre-requisitos

:white_check_mark: Revisar las siguientes indicaciones en [la guia de configuracion de pre-requisitos][setup],
donde podrás configurar tu entorno de desarrollo AWS Cloud9 IDE

Ver el diagrama abajo para una representación completa de la architectura

![Mis textos](images/wildrydes-complete-architecture.png)

### Módulos

Este workshop esta divido en cuatro modulos, cada modulo describe un escenario de
lo que vamos a construir con instrucciones paso a paso para ayudarte a implementar
la arquitectura y verificar el trabajo.


| Module | Description |
| ---------------- | -------------------------------------------------------- |
| [Static Web hosting][static-web-hosting] | Desplegar un sitio web estático usando la consola de Amplify creando primero un repositorio *git* (ya sea en CodeCommit o GitHub) y luego enviando el código fuente del sitio. |
| [User Management][user-management] | Configurar la administración de usuarios para el sitio web usando Amazon Cognito. |
| [Serverless Backend][serverless-backend] | Crear una funciona lambda que almacene los datos en una tabla Amazon DynamoDB. |
| [RESTful APIs][restful-apis] | Exponer la función lambda via Amazon API Gateway como una API RESTful que pueda ser llamada por el sitio web usando Javascript. |

:warning: Estos módulos deben ser executados de forma secuencial.


[wildrydes]: http://wildrydes.com/
[unicorns]: http://www.wildrydes.com/unicorns.html
[amplify-console]: https://aws.amazon.com/amplify/console/
[cognito]: https://aws.amazon.com/cognito/
[lambda]: https://aws.amazon.com/lambda/
[api-gw]: https://aws.amazon.com/api-gateway/
[s3]: https://aws.amazon.com/s3/
[dynamodb]: https://aws.amazon.com/dynamodb/
[setup]: 0_Setup/
[static-web-hosting]: 1_StaticWebHosting/
[user-management]: 2_UserManagement/
[serverless-backend]: 3_ServerlessBackend/
[restful-apis]: 4_RESTfulAPIs/
[cleanup]: 9_CleanUp/
