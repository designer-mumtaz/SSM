// function oddEven (i) {
// 	if(i % 2 === 0) {
// 			console.log('even')
// 		} else {
// 			console.log('odd')
// 		}
// }

// let oddEven = (x => x % 2 === 0 ? console.log('even') : console.log('odd'))

  //3. Reverse using Recursion
var str = "Rajeev";
var reversedString = '';
var index = str.length - 1;
function Reverse(str, index) {
    if (index < 0) {
        console.log(reversedString);
    }
    else {
        reversedString = reversedString + str[index];
        Reverse(str, index - 1);
    }
}
Reverse(str, index);