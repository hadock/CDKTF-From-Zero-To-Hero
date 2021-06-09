# Módulo 3: Arquitectura PoC

En este módulo trabajarás con una típica arquitectura orientada a micro-servicios basada en API Gateway, Lambda y DynamoDB, sumado a esto finalmente agregaremos una capa de autenticación a nuestra API utilizando Amazon Cognito.

## Sobre este módulo
El demo y su código fuente no pretenden ser una referencia de programación, mas bien el objetivo es demostrar que podemos trabajar con un lenguaje familiar para cualquier developer y conseguir que este mismo sea el provisionador de los recursos que necesita para su aplicativo sin tener que aprender HCL.

## Instrucciones (Parte 1)

1. Descarga el codigo fuente de la PoC con la siguiente instrucción
    ```bash
    wget --output-document=~/environment/demo.zip https://raw.githubusercontent.com/hadock/CDKTF-From-Zero-to-Hero/master/Assets/demo.zip && unzip ~/environment/demo.zip && rm ~/environment/demo.zip
    ```
    En el arbol de directorios veras que se acaba de crear uno nuevo llamado Demo
    ![3_DemoFolder](../Assets/images/3_DemoFolder.png)

1. Vas a mover los archivos desde este directorio al directorio donde está el proyecto CDK, que en mi caso se llama **MyProject**
    
    ![3_MovingFiles](../Assets/images/3_MovingFiles.png)

1. Cuando te pida reemplazar el archivo `main.ts` le damos clic en **Overwite**

    ![3_ReplaceAlert](../Assets/images/3_ReplaceAlert.png)
    

### :star: Recap (Parte 1)
Hasta aquí lo que hemos realizado es descargar el codigo fuente que contiene la definición de la arquitectura en lenguaje TypeScript.

+ **applications** `aqui están los fuentes de la arquitectura y la lambda que desplegaremos`
+ **main.ts** `este es el arhivo principal que cdktf va a buscar cada vez que ejecutamos un despliegue` 
