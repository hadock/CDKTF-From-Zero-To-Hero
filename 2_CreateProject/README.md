# Módulo 2: Inicialización de un proyecto CDKTF en Typescript

Crearás un proyecto usando el CLI de CDKTF, una vez listo, le agregaremos el provider **AWS** para cargar todas las clases Typescript que te permitirán ir codeando tu arquitectura.

## Sobre este módulo
A continuación y al igual que en el módulo anterior, tendrás dos alternativas para crear el proyecto, la primera con un script en el que he simplificado el proceso y la segunda, paso a paso

## Instrucciones

1. Copia y pega el siguiente comando que te permitirá inicializar el proyecto, con sencillos pasos tribiales tales como proveer un nombre para el directorio y pudiendo dejar todo lo demas por defecto
    ```bash
    wget --output-document=startproject.sh https://raw.githubusercontent.com/hadock/CDKTF-From-Zero-to-Hero/master/Assets/scripts/startproject.sh && chmod u+x startproject.sh && ./startproject.sh
    ```
    > la ejecución del comando anterior ejecutó una serie de pasos que puedes leer detalladamente en el paso a paso

1. Entra en el directorio creado en el paso anterior usando la navegación de directorios al costado izquierdo de tu Cloud9 y abre el archivo `cdktf.json`

1. Verifica que el contenido de tu archivo `cdktf.json` sea como el siguiente, si es así, está todo listo. 
    ```JSON
    {
        "language": "typescript",
        "app": "npm run --silent compile && node main.js",
        "terraformProviders": [
            "aws@~> 2.0"
        ],
        "terraformModules": [],
        "context": {
            "excludeStackIdFromLogicalIds": "true",
            "allowSepCharsInLogicalIds": "true"
        }
    }
    ```


**:white_check_mark: Indicaciones paso a paso**

1. Crea un directorio para tu proyecto, usando la terminal de Cloud9 escribe la siguiente instrucción
    ```bash
    mkdir MiProyectoCDKTF
    ```
1. Entra a tu directorio recientemente creado
    ```bash
    cd MiProyectoCDKTF
    ```
1. Inicializa el proyecto CDKTF utilizando la siguiente instrucción y deja el resto de la configuración por defecto
    ```bash
    cdktf init --template=typescript --local
    ```
1. Una serie de directorios se han creado después de la inicialización, usando la navegación de directorios ubicada al costado izquierdo de tu Cloud9, abre el archivo de nombre `cdktf.json` y verás que su contenido es como el siguiente
    ```JSON
    {
        "language": "typescript",
        "app": "npm run --silent compile && node main.js",
        "terraformProviders": [],
        "terraformModules": [],
        "context": {
            "excludeStackIdFromLogicalIds": "true",
            "allowSepCharsInLogicalIds": "true"
        }
    }
    ```

    Reemplaza todo el contenido para dejarlo como este y guarda el archivo
    
    ```JSON
    {
        "language": "typescript",
        "app": "npm run --silent compile && node main.js",
        "terraformProviders": [
            "aws@~> 2.0"
        ],
        "terraformModules": [],
        "context": {
            "excludeStackIdFromLogicalIds": "true",
            "allowSepCharsInLogicalIds": "true"
        }
    }
    ```
    **Como habrás notado, hemos agregado el provider "aws@~> 2.0"**

1. Es hora de cargar las clases Typescript del provider que hemos agregado y para eso en la terminal de tu Cloud9 ejecutaremos la siguiente instrucción, asegurándonos que seguimos en el mismo directorio
    ```bash
    cdktf get
    ```

### :star: Recap
Hemos inicializado y configurado nuestro proyecto para trabajar con las APIs de AWS, ahora puedes dar un vistazo al archivo `main.ts`, es en este archivo donde comenzaremos a trabaja

## Extra
De manera de hacer mas expedito este workshop, trabajaremos con el `terraform.tfstate` de manera local, lo cual será suficiente para este laboratorio, pero en tu entorno laboral y/o con equipos, quizas sea necesario que esto sea manejado en tu cuenta de terraform, alojando este archivo en un almacenamiento de objetos del proveedor, por lo que siempre puedes ejectutar `cdktf login` para obtener un token desde tu cuenta terraform

Para quienes no saben de que se trata el archivo `.tfstate`
> Contiene el actual estado físico de tu arquitectura, de esa forma cuando ejecutas un despliegue, terraform va a valerse de ese archivo para hacer el plan y evaluar los cambios que vas a aplicar versus los que estan fisicamente desplegados. 