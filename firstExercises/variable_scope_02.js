/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           // In this case we overwrite permanent the value of scope, thats is because 
                                // we declare the variable without "restrictions", this varible exist in the 
                                // global scope and when we overwrite it in local alse overwrite in the global