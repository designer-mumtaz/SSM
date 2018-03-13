function diffArray (arr1, arr2) {
	var combo = arr1.concat(arr2);
	//arr1.sort(function (a, b) {return a - b});

	return combo.filter(function (num) {
		//console.log(arr2.indexOf(num));
		if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
			return num;
		}
	});
}

var a = [1,2,7,4];
var b = [1,3,5,6,9];
console.log(diffArray(a, b));


// function diffArray (arr1, arr2) {
// 	var result = [];

// 	for(var i = 0; i < arr1.length; i++) {
// 		if(arr2.indexOf(arr1[i]) === -1) {
// 			result.push(arr1[i]);
// 		}
// 	}

// 	for (var j=0; j < arr2.length; j++) {
// 		if(arr1.indexOf(arr2[i]) === -1) {
// 			result.push(arr2[j])
// 	 	}
// 	}

// 	return result;
// }

// var out = ([1,2,7,4], [1,3,5,6,9]);
// console.log(diffArray(out));

// function getMatch(a, b) {
//     var matches = [];

//     for ( var i = 0; i < a.length; i++ ) {
//         for ( var e = 0; e < b.length; e++ ) {
//             if ( a[i] === b[e] ) matches.push( a[i] );
//         }
//     }
//     return matches;
// }

// var a = [1,2,7,4];
// var b = [1,3,5,6,9];
// console.log(getMatch(a, b));