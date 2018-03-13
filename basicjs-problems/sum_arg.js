
function sum () {
      var sum = 0;
      for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
}
console.log(sum((2),4,5, (11)));
console.log(sum(4,5,6))


  // 2nd approach

//the arguments special variable provides access to arguments as an array-like object
    function add () {
      var sum = 0;
      for (var i = 0, j = arguments.length; i <j; i++) {
        sum += arguments[i];
      }
      return sum;
    }

   console.log(add((2),4,5, (11)))


  

