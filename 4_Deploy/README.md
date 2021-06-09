




1. Asegurate de estar en el directorio correcto, si no estás seguro, puedes verificarlo con la siguiente instrucción
    ```bash
    pwd
    ```
    si el resultado es: 
    ```bash
    /home/ec2-user/environment
    ```
    entonces deberás entrar al directorio de tu proyecto con una instruccion como la siguiente

    ```bash
    cd Nombre_De_Tu_Directorio
    ```
    
1. Una vez en el directorio, vamos a ejecutar la primera instrución.
    ```bash
    cdktf synth
    ```
    > Esta instrucción nos permitirá saber si el código está correcto y a su vez este mismo va generar el stack de terraform y todos sus assets en el directorio `./cdktf.out`, si tienes curiosidad de ver que hay ahi dentro, puedes dar un vistazo
