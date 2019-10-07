/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

function oddsums(n) {

    let total = 0, result = []; 
    
    for(let x = 1; x <= n; x++) {
        let odd = 2*x-1;
        total += odd;
        result.push(total);
    }

    // console.log(x);              // que sucede y por que?
    // console.log(odd);            // que sucede y por que?
     console.log(total);          // que sucede y por que?
    
    return result;      // when we do console.log of x and z will appear ReferenceError becuase 
                        //this 2 variables only exist in the block scope but the total will be 25,
                        //the last number of the array
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]