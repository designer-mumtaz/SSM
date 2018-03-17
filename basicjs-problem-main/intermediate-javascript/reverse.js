// CHALLENGE 1: REVERSE A STRING

function reverseString(str) {
	//...............1 ------------
	// return str
	// 	.split('')
	// 	.reverse()
	// 	.join('');

	//...............2 ------------
	// let string = '';
	// for(let i = str.length-1; i >= 0; i--) {
	// 	string = string + str[i];
	// }
	// return string;

	//...............3 ------------
	// let string = '';
	// for (let i = 0; i <= str.length -1; i++) {
	// 	string = str[i] + string;
	// }
	// return string;

	//...............4 ------------
	// let string = '';
	// for (let itm of str) {
	// 	string = itm + string;
	// }
	// return string;
	
	//...............5 ------------
	// let string = '';
	// str.split('').forEach(function (char) {
	// 	string = char + string;
	// })
	// return string;

	//...............6 ------------

	// let string = '';
	// str.split('').forEach(char => string = char + string);
	// return string;
	//...............7 ------------

	// return str.split('').reduce(function (string, char) {
	// 	return char + string;
	// }, '')
	return str.split('').reduce((string, char) => char + string, '')
}

console.log(reverseString('welcome'));

// function reverse (arr) {

// 	var output = '';
// 	for(var i = arr.length -1; i >=0; i--) {
// 		output += arr[i];
// 	}
// 	return output;

// }

// // if number.

// function reverseInt (arr) {

// 	var input = arr.toString();
// 	var output = '';
// 	for(var i = input.length -1; i >=0; i--) {
// 		output += input[i];
// 	}
// 	return parseInt(output);
// }

// console.log(reverseInt('12345'));