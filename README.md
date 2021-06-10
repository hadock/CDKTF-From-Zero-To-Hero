## CDK For Terraform - From Zero to Hero (UNDER CONSTRUCTION)

En este workshop instalaremos y configuraremos todo lo necesario para utilizar `cdktf`, el cli desarrollado por Hashicorp y AWS, quien te permitirá realizar todas las operaciones necesarias para que tu infraestructura como código (escrita en TypeScript para este workshop) sea desplegada mediante terraform.
Utilizaremos AWS Cloud9, por lo que no olvides leer los pre-requisitos y seguir los pasos para tener tu ambiente preparado para trabajar.

En esta arquitectura desplegarás una aplicación serverless que utilizará [AWS Lambda][lambda], [Amazon API Gateway][api-gw], [Amazon DynamoDB][dynamodb], [Amazon Cognito][cognito]. El objetivo de este workshop es que entiendas lo necesario sobre los objetos y clases que te permitirán en un lenguaje amigable para un desarrollador, desplegar y provisionar arquitecturas, usando AWS Lambda como nuestro backend y expuestos de forma segura con API Gateway, luego Amazon Cognito provee las funciones de administración de usuarios y autenticación para asegurar el backend, y finalmente DynamoDB provee la capa de persistencia de datos donde tu backend puede almacenar y consultar por esta información.

### Pre-requisitos

:white_check_mark: Revisar las siguientes indicaciones en [la guia de configuracion de pre-requisitos][setup],
donde podrás configurar tu entorno de desarrollo AWS Cloud9 IDE

Ver el diagrama abajo para una representación completa de la architectura que vamos a desplegar con la prueba de concepto en la demo del módulo 3

![Mis textos](Assets/images/complete-architecture.png)

### Módulos

Este workshop esta divido en cuatro modulos, cada modulo describe un escenario de
lo que vamos a construir con instrucciones paso a paso para ayudarte a implementar
la arquitectura y verificar el trabajo.


| Module | Description |
| ---------------- | -------------------------------------------------------- |
| [Instación de clientes][installing-components] | Instalar las herramientas necesarias para construir y trabajar con un proyecto CDKTF |
| [Crear un Proyecto][create-project] | Crear un proyecto nuevo y entender su arbol de directorios |
| [Arquitectura PoC][get-sourcecode] | Del sombrero del mago, sacaremos una arquitectura que contiene componentes básicos tales como Authenticación, APIs, Microservicios y Persistencia de datos |
| [Desplegar infraestructura][deploy-architecture] | Desplegaremos nuestra arquitectura y examinaremos los resultados. |

:warning: Estos módulos deben ser executados de forma secuencial.


[cognito]: https://aws.amazon.com/cognito/
[lambda]: https://aws.amazon.com/lambda/
[api-gw]: https://aws.amazon.com/api-gateway/
[s3]: https://aws.amazon.com/s3/
[dynamodb]: https://aws.amazon.com/dynamodb/
[setup]: 0_Setup/
[installing-components]: 1_Installing/
[create-project]: 2_CreateProject/
[get-sourcecode]: 3_GetSourceCode/
[deploy-architecture]: 4_Deploy/
[cleanup]: 9_CleanUp/
