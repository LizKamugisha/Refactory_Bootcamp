/*
Fibonacci Test First Approach
------------------------------
Programming Pair : Liz Kamugisha & Rino Kitimbo

The Fibonacci Series is a summation of the previous two numbers in a sequence
with the first two numbers being 0 and 1. It can be represented by the equation Fn = Fn-1 + Fn-2
*/

// TRIAL 1 : Finding the nth Fibonacci number using a while loop
/*
const nthFibonacci = (num) => {
	// Unit 1
	if (num === 1) return 0;
	if (num === 2) return 1;
	let num1 = 1;
	let num2 = 1;
	let sum;
	let i = 2;
	// Unit 2
	while (i < num) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
		i += 1;
	}
	return num2;
};

// Intantiating the function.
console.log(`The nth number is ${nthFibonacci(1)}`);

// Exporting the function
module.exports = nthFibonacci;
*/

// TRIAL 2 : Fibonacci Series of nth element using recussion method
// The Fibonacci Sequence Reffrence: [0, 1] 1, 2, 3, 5, 8, 13, 21, 34, 55...

// eslint-disable-next-line no-var
var fibonacciSeries = (n) => {
	// Unit one.
	if (n === 1) {
		return [0, 1];
	}
	// Unit two.
	// eslint-disable-next-line vars-on-top
	// const s = fibonacciSeries(n - 1);
	// s.push(s[s.length - 1] + s[s.length - 2]);
	// return s;
};

// Intantiating the function
console.log(fibonacciSeries(1));

// Exporting the function
module.exports = fibonacciSeries;
