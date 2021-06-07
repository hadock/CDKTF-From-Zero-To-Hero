#/bin/bash

echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo "@@@@@@@ Paso 1 @@@@@@@@"
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo ""
echo "Todo parte por el directorio para el proyecto"
read -p "Vamos con un nombre: " directory
mkdir $directory
echo "--------------------------------------------------"
echo "bien, se ha creado el directorio: " $(pwd)/$directory
echo "--------------------------------------------------"
echo "entramos al directorio $directory"
echo "--------------------------------------------------"
cd $directory
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo "@@@@@@@ Paso 2 @@@@@@@@"
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo ""
echo "---------------------------------------------------"
echo "ejecutando cdktf init --template=typescript --local"
echo "---------------------------------------------------"
cdktf init --template=typescript --local

echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo "@@@@@@@ Paso 3 @@@@@@@@"
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo ""
echo "Agregar el provider AWS al archivo cdktf.json"
echo ""
echo "Para esto modificamos la linea que dice.."
echo "-----------------------------------------"
echo '"terraformProviders": [],'
echo "-----------------------------------------"
echo ""
echo "Y la dejamos asi... "
echo ""
echo "-----------------------------------------"
echo '"terraformProviders": ["aws@~> 2.0"],'
echo "-----------------------------------------"
echo ""
node -p "var x=require('./cdktf.json'); x.terraformProviders.push('aws@~> 2.0');  require('fs').writeFileSync('./cdktf.json', JSON.stringify(x, null, 2))"
echo ""
echo "Finalmente hacemos un get de los modulos y providers configurados en el archivo para comenzar a trabajar"
echo "ejecutando: cdktf get"
echo "asi obtendremos los constructores Typescript para AWS"
cdktf get
echo ""
echo ""
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo "@@@@@@@ Paso 4 @@@@@@@@"
echo "@@@@@@@@@@@@@@@@@@@@@@@"
echo ""
echo "Comencemos a terraformear con codigo de verdad... =) happy codding!"