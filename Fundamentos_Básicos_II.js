function SinPositivos(array){
    for (i in array){
        if(array[i] > 0){
            array[i] = "Big";
        }
    }
    return array
}
console.log(SinPositivos([5,-3,0,6,-3,7,9]))

//

    // Cambiamos los números positivos por el string Big

//

function A(array){
    Print = `El valor que se imprime es: ${Math.max.apply(null, array)}`;
    Return = `El valor que returna es: ${Math.min.apply(null, array)}`;
    console.log(Print)
    return Return
}
console.log(A([3,6,-5,3,6,0,-3]))

//

    // Imprime el primer elemento y returna (el valor asignado a la función) el último elemento.

//

function A(array){
    Print = `El valor que se imprime es: ${array[array.length-2]}`;
    for (i in array){
        if(array[i] % 2 === 1 || array[i] % 2 === -1){
            Return = `El valor que returna es: ${array[i]}`;
            break
        }
    }
    console.log(Print)
    return Return
}
console.log(A([3,6,-5,3,6,0,-3]))

//

    // Imprime el penúltimo valor y returna el primer valor impar.

//

function Duplicador(array){
    let dobleVar = []
    for (i in array){
        dobleVar.push(array[i] * 2)
    }
    return dobleVar
}
console.log(Duplicador([3,6,-7,4,0,4,5]))

//

    // Duplica los valores de un arreglo.

//

function Contador(array){
    let count = 0;
    for (i in array){
        if (array[i] > 0){
            count += 1;
        }
    }
    array[array.length-1] = count
    return array
}
console.log(Contador([3,6,4,8,-5,3,8,0,-9]))

//

    // REEMPLAZA EL ÚLTIMO NÚMERO ES REEMPLAZADO POR LA CANTIDAD DE NÚMEROS POSITIVOS

//

function ParesAndImprares(array){    
    let countP = 0;
    let countI = 0;
    if (array[0] % 2 === 0){
        countP += 1;
                           }
    if (array[0] % 2 === 0){
        countI += 1;
                           }
    for (let i = 1; i < array.length; i++){
        
        if (array[i] % 2 === 0){
            countP += 1;
            countI = 0;
            if (countP >= 3){
                console.log("¡Es para bien!")                
                            }
                               }
        if (array[i] % 2 === 1){
            countI += 1;
            countP = 0;
            if (countI >= 3){
                console.log("¡Qué imparcial!")                
                            }
                               }
                                            }
                            
                                 }
ParesAndImprares([3,6,-4,8,1,0,2,5,8,10])

//

    // CADA VEZ QUE HAY UN NÚMERO PAR SE IMPRIME "ES PARA BIEN" Y SI ES IMPAR SE IMPRIME "QUÉ IMPARCIAL".

//

function Incrementa(arr){
    for (let i = 0; i <= arr.length; i++){
        if (i % 2 === 1){
            arr[i] = arr[i] + 1
        }
    }
    return arr
}
console.log(Incrementa([0,3,5,-2,9,-2,-5,10]))

//

    // AUMENTA EN UNA UNIDAD PARA TODOS LOS ELEMENTOS CON ÍNDICE ES IMPAR.

//

function Recorrer(array){    
    for (i in array){
        temp = array[i];
        array[i] = temp.length;
        temp = "";
    }
    return array
}
console.log(Recorrer(["programar", "dojo", "genial"]))

//

    // Nos da el largo de cada string de un arreglo.

//

function AgregarSiete(array){
    array2 = array;
    for (i in array2){
        array2[i] = array2[i] + 7
    }
    return array2
}
console.log(AgregarSiete([3,6,0,-5,2,-9]))

//

    // Si tenemos un arreglo con números, devolveremos otro arreglo con todos los valore aumentados en 7.

//

function Invertir(array){
    array = array.reverse()
    return array
}
console.log(Invertir([3,-6,9,4,0,-5,6,-3,7,10]))

//

    // Esta función nos invierte el orden de la lista.

//

function SoloNegativos(array){
    for (let i = 0; i < array.length; i++){ 
        if (array[i] > 0){
            array[i] = array[i] * -1;
        }
    }
    return array
}
console.log(SoloNegativos([3,6,7,-2,-6,10,-7,21]))

//

    // Convierte todos los números de un arreglo en negativos, menos el cero.

//

function Alimentos(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === "comida"){
            console.log("yummy")
                                  }
        else{
            console.log("temgo hambre")
            }
                                          }
                         }
console.log(Alimentos(["comida", "23", "comida", "plata"]))

//

    // Imprime yummu si tenemos el string comida, si no es así, imprime el string "tengo hambre".

//

function Movedor(array){
    if (array.length % 2 === 0){
        for (let i = 0; i < array.length; i++){
            if (i === (array.length  / 2)){
                break
            }
            let temp = array[i];
            array[i] = array[array.length - i -1];
            array[array.length - i - 1] = temp;
        }
    }
    if (array.length % 2 === 1){
        for (let i = 0; i < array.length; i++){
            if (i === (array.length  / 2) - 0.5){
                break
            }
            let temp = array[i];
            array[i] = array[array.length - i -1];
            array[array.length - i - 1] = temp;
        }
    }
    return array
}
console.log(Movedor([1,5,9,0,3,6]))

//

    // Intercambia la posición de los elementos de un string en el formato [a,b,c,d,e,f] = [f,e,d,c,b,a]

//

function Producto(array, number)
{
    for (let i = 0; i < array.length; i++)
    {
        array[i] = array[i] * number;
        if (array[i] === 0)
        {
            array[i] = 0;
        }
    }
    return array
}
console.log(Producto([4,0,-8,7], -3))

//

    // Multiplica un arrego por un número anteriormente definido.

//
