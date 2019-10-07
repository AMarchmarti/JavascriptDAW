/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;  // i is defined throughout function
    
    if (typeof o == "object") {
        
        var j = 0;  // j is defined everywhere, not just block
    
        for(var k=0; k < 10; k++) {      // k is defined everywhere, not just loop
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);