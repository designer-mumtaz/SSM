
function sum () {
  let sum = 0;
  for (txt of arguments) {
    sum = txt + sum;
  }
  return sum;

  // let str = Array.prototype.slice.call(arguments);
  // let string = 0;
  // // for (let i = 0; i<arr.length; i++) {
  // //   sum += arr[i];
  // // }
  // str.forEach(char => string = char + string);
  // return string;



      // var sum = 0;
      // for(var i=0; i<arguments.length; i++) {
      //   sum += arguments[i];
      // }
      // return sum;
}
console.log(sum(1,7,4,(7)));
// console.log(sum(4,5,6))


  // 2nd approach

// //the arguments special variable provides access to arguments as an array-like object
//     function add () {
//       var sum = 0;
//       for (var i = 0, j = arguments.length; i <j; i++) {
//         sum += arguments[i];
//       }
//       return sum;
//     }

//    console.log(add((2),4,5, (11)))



// // 3 rd approach
// function addChain(n) {
//   var sum = function(x){
//     return addChain(n + x)
//   }

//   sum.valueOf = function(){
//     return n;
//   }

//   return sum;
// }

// console.log(addChain(1)(2)(3));
// // 6




  

