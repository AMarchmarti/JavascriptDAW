/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;
    console.log('y :', x);
    if (true) {
        var x = 71;             
        console.log(x);         // 71
    }
    console.log('x :', x);
}


varTest(); // First one will be 31 and the next two will be 71, because we overwrite a global variable
    
function letTest() {

    var x = 31;
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
      }
      
      console.log(x);             // 31
  }
  
  letTest(); // Fisrt one 71 and second 31, this is because we declare first one in global scope and the next one in local scope.


  function hoistingTest() {
  
      console.log(w); //In this case w will be undefined becaus it's declared without value
      // console.log(z); // ReferenceError, this is because z is only in local scope, not in global.
  
      var x = 31;
      let y = 91;
      u = 1;                        
      
      if (true) {
          let x = 71;               
          console.log(x);           // 71
          console.log(y);           // 91
          let z = 101;
          var w = 1001;             
      }
        
      console.log(x);               // 31
      // console.log(z);             // ReferenceError
      console.log(w);               // 1001
    }

hoistingTest(); //It is a complex example but same theory of last one, the variables, declare with var,
                //are declared in the global scope and next time you write the same variable this ones will be overwritten.
                //Meanwhile the variables declare with let only save in the local scope, and prevail the local scope.

console.log(u);   //without any type, javascript declare in global scope.