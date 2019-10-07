/**
 * global vs local
 * nested scopes
 */

var scope = "global scope"; //DEclare varible in the global scope

function checkscope() {
    
    var scope = "local scope"; 
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();// return the value of the function with the variable scope in local scope
}

console.log(checkscope());              // => "nested scope"
console.log(scope);                     // => "global scope"