/**
 * global vs local
 */

var scope = "global"; //We declare a global variable here, that means in all the script this scope will be "global"

function checkscope() {
    var scope = "local"; // Here we overwrite the variable, scope now is "local".
    return scope;
}
console.log('scope :', scope); // Meanwhile we not use the function the variable scope will be "global", but 
                              // when we use the function the scope will be "local", only if we use the function
console.log(checkscope());      // => "local"
console.log('scope :', scope);