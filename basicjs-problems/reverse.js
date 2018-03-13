function reverse (arr) {

	var output = '';

	for(var i = arr.length -1; i >=0; i--) {
		output += arr[i];
	}
	return output;

}

// if number.

function reverseInt (arr) {

	var input = arr.toString();

	var output = '';

	for(var i = input.length -1; i >=0; i--) {
		output += input[i];
	}
	return parseInt(output);

}

console.log(reverseInt('12345'));