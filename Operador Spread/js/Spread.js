function ejecutar(){

    var i;
    var numeros = [3];
    var suma = 0;

    for( i = 0; i<3 ; i++){

        do{

            numeros[i] = prompt( i+1 + ".Digitar numero: ");

            if(numeros[i].length == 0 || isNaN(numeros[i])){

                alert("El dato no es un numero o esta vacio");
            }

        }while(numeros[i].length == 0 || isNaN(numeros[i]));
       

    }

    var copiarNum = [...numeros]; //Aplicamos el operador spread de la investagacion para copiar un arreglo a otro y separarlo uno por uno;


    suma = sumar(...numeros); // Aplicamos el operador spread para poder separa cada dato del arreglo y poder enviarlo a otra funcion


    alert("El resultado de la suma es: " + suma);

    alert("Los numero ingresados fueron: " + copiarNum);
    
}


function sumar(x,y,z){

    return parseInt(x) + parseInt(y) + parseInt(z);
}