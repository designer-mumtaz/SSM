function absent (arr) {
	
	var arrayLength = Math.max.apply(Math, arr);
	console.log(arrayLength);
	var missing = [];

	for ( var i = 0; i < arrayLength; i++ ) {
	    if ( arr.indexOf(i) < 0 ) {
	        missing.push( i );
	    }
	}
	return missing;
}

var a = [9,1,2, 5, 5,7,9];
console.log(absent(a));


// function absent(arr){
// 	var output = [], 
// 		min = Math.min.apply('',arr), 
// 		max = Math.max.apply('',arr);


// 		while(min < max){
// 			if(arr.indexOf(++min)== -1) output.push(min);
// 		}
// 		return output;
// }

// var a = [9,1,2, 5, 5,7,9];
// console.log(absent(a));


//var intArray = [1,7,2,3,5];  // Missing 2,6,11,14,17

// function missingNum (num) {

// 	var count = num[num.length - 1];
// 	var missing = [];
// 	for ( var i = 1; i <= count; i++ ) {
// 		if (num.indexOf(i) == -1) {
// 			missing.push(i);
// 		}
// 	}
// }

// console.log( missingNum (intArray) );

// var a = [1,2,3,5,7,9];
// console.log(a.length-1);
// var count = a[a.length - 1];
// console.log(count);
// var missing = [];
// for ( var i = 1; i <= count; i++ ) {
// 	if (a.indexOf(i) == -1) {
// 		missing.push(i);
// 	}
// }



// function absent(arr){
// 	var output = [], 
// 		min = Math.min.apply('',arr), 
// 		max = Math.max.apply('',arr);


// 		while(min < max){
// 			if(arr.indexOf(++min)== -1) output.push(min);
// 		}
// 		return output;
// }

// var a = [9,1,2, 5, 5,7,9];
// console.log(absent(a));



