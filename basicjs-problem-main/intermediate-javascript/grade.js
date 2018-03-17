const grade = 60;

const result = (grade > 80) ? 'Distinction'
			: (grade > 50) ? 'Pass' : 'Fail';

//console.log(result);

let numers = [1,2,3,4,5,6];
// let evenNumbers = numers.filter(function (n) {
// 	return (n % 2 === 0)
// });

let evenNumbers = numers.filter( n => !(n % 2 === 0));

console.log(evenNumbers);