

// Este bucle lo que hace es dependiendo del numero al que se le designe la variable numero, en la consola expresa la tabla del mismo numero. Se entiende como tabla a los resultados de multiplicar el numero por los numeros del 0 al 10.

let numero = 6;

console.log(`Esta es la tabla del ${numero}.`);


for (let i=0; i<=10; i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`;
    console.log(mensaje);
}
