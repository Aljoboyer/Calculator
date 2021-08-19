
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
        document.getElementById("result").value += value;
         
   }

   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

document.getElementById('delete').addEventListener('click', function(){
      const display = document.getElementById("result")
        display.value = display.value.slice(0, display.value.length -1)
})

