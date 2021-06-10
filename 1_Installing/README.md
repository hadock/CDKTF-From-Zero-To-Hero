# Módulo 1: Instalación de los clientes de terminal

En este módulo instalarás el cliente `cdktf-cli`, quien te proveera de las herramientas necesarias para crear, desplegar, destruir o hacer troubleshooting sobre un proyecto. Este CLI a su vez depende de otro llamado `terraform-cli`, quien ya debes conocer si tienes experiencia previa con Terraform, sino, no te preocupes que esto va desde lo mas básico.

## Los requisitos para instalar `cdktf-cli` son:
> Esto según el sitio web oficial, podría cambiar en el tiempo, por tanto asegurate de mantenerte al día con estos requisitos ya que pueden cambiar en el tiempo

    Terraform >= v0.12
    Node.js >= v12.16
    Yarn >= v1.21
    
Esto no será problema en Cloud9 dado que todos estos vienen por defecto en cada ambiente, salvo `terraform-cli` que procederemos a instalar con los siguientes scripts

### Instalación


1. Descarga el script que he creado para hacer este paso mas expedito y simplememte ejecuta el siguiente commando en la terminal de Cloud9, si crees que esto es muy fácil, ve a la sección paso a paso para hacerlo tu mismo
    ```bash
    wget --output-document=bootstrap.sh https://raw.githubusercontent.com/hadock/CDKTF-From-Zero-to-Hero/master/Assets/scripts/bootstrap.sh && chmod u+x bootstrap.sh && ./bootstrap.sh
    ```

2. verificamos que todo este correctamete instalado ejecutando las siguientes instrucciones
    ```bash
    cdktf --version
    ```

    Si todo salio bien, deberiamos tener esta salida
    
    ```sh
    0.4.1-pre.265
    ```
    
    Luego ejecutamos 
    
    ```bash
    terraform --version
    ```
    
    El resultado debería ser como el siguiente
    
    ```bash
    Terraform v0.15.5
    on linux_amd64
    ```
    
**:white_check_mark: Indicaciones manuales paso a paso**

1. Instala el **cdktf-cli** desde NPM con el siguiente comando
    ```bash
    npm install --global cdktf-cli@next
    ```

1. Instala las herramientas de administración de repositorios de **yum**
    ```bash
    sudo yum install -y yum-utils
    ```
1. Ahora agrega los repositorios de terraform 
    ```bash
    sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
    ```
1. Finalmente instala **terraform-cli** y agrega el autocompletado 
    ```bash
    sudo yum -y install terraform
    ```

    ```bash
    touch ~/.bashrc
    terraform -install-autocomplete
    ```
 