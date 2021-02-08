/*
Fibonacci Test First Approach
------------------------------
Programming Pair : Liz Kamugisha & Rino Kitimbo

The Fibonacci Series is a summation of the previous two numbers in a sequence
with the first two numbers being 0 and 1. It can be represented by the equation Fn = Fn-1 + Fn-2
*/

// FUNCTION 1 : Finding the nth Fibonacci number using a while loop

const nthFibonacci = (num) => {
	// Unit 1
	if (num === 0) return 0;
	// Unit 2
	if (num === 1) return 1;
	// Unit 3
	if (num === 2) return 1;
	// Exception A
	if (num < 0) return 'number must be greater than or equal to 0';
	// Exception B
	if (num > 100) return 'number should not be greater than 100';
	// Unit 4
	let num1 = 1;
	let num2 = 1;
	let sum;
	let i = 2;
	while (i < num) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
		i += 1;
	}
	return num2;
};

// Console Log Test
// const nth = 2;
// const fibNum = nthFibonacci(nth);
// console.log(`Fib(${nth}) = ${fibNum}`);

// Exporting the function
module.exports = nthFibonacci;

// FUNCTION 2 : Fibonacci Series of nth element using recussion method
// The Fibonacci Sequence Reffrence: [0, 1] 1, 2, 3, 5, 8, 13, 21, 34, 55...

const fibonacciSeries = (n) => {
	// Unit 1
	if (n === 0 || n === 1) {
		return [0, 1];
	}
	// Exception A
	if (n < 0) {
		return 'number must be greater than or equal to 0';
	}
	// Exception B
	if (n > 100) {
		return 'number should not be greater than 100';
	}

	// Unit 2
	const f = fibonacciSeries(n - 1);
	f.push(f[f.length - 1] + f[f.length - 2]);
	return f;
};

// Console Log Test
// console.log(fibonacciSeries(2));

// Exporting the function
module.exports = fibonacciSeries;
