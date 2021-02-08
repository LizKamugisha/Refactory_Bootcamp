/*
TEST FIRST APPROACH
----------------------
Programming Pair : Liz Kamugisha & Rino Kitimbo
*/

// Import Chai library
const { assert } = require('chai');

// FUNCTION 1: Fibonacci While Loop
const nthFibonacci = require('../fibonacci');

/* eslint-disable no-undef */
describe('fibonacci while loop tests', () => {
	// Unit 1 test
	it('check if fib(0) returns 0 / [0,1]', () => {
		// assert(nthFibonacci(0) === 0);
		assert.deepEqual(nthFibonacci(0), [0, 1]);
	});
	// Unit 2 test
	it('check if fib(1) returns 1 / [0,1]', () => {
		// assert(nthFibonacci(1) === 1);
		assert.deepEqual(nthFibonacci(1), [0, 1]);
	});
	// Unit 3 test
	it('check if fib(2) returns 1 / [0,1,1]', () => {
		// assert(nthFibonacci(2) === 1);
		assert.deepEqual(nthFibonacci(2), [0, 1, 1]);
	});
	// Exception A test
	it('check if num < 0 returns string', () => {
		assert.isString(nthFibonacci(-1), 'throw statement');
	});
	// Exception B test
	it('check if num > 100 returns string', () => {
		assert.isString(nthFibonacci(101), 'throw statement');
	});
	// Unit 4 test
	it('check if function calculates fibonacci of any number', () => {
		// assert.equal(nthFibonacci(8), 21);
		assert.deepEqual(nthFibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13, 21]);
	});
	// Validation test
	it('check if input is number / array', () => {
		// assert.isNumber(nthFibonacci(10));
		assert.isArray(nthFibonacci(10), []);
	});
});

// FUNCTION 2: Fibonacci Recurssion Method
const fibonacciSeries = require('../fibonacci');

describe('fibonacci recurssion method tests', () => {
	// Unit 1 test
	it('Check if n = 0 or n = 1, return fibonacci sequence of [0,1]', () => {
		assert.deepEqual(fibonacciSeries(0), [0, 1]);
		assert.deepEqual(fibonacciSeries(1), [0, 1]);
	});
	// Exception A test
	it('check if num < 0 returns string', () => {
		assert.isString(fibonacciSeries(-2), 'throw statement');
	});
	// Exception B test
	it('check if num > 100 returns string', () => {
		assert.isString(fibonacciSeries(200), 'throw statement');
	});
	// Unit 2 test
	it('check if function returns fibonacci series of any number between 0 < 100', () => {
		assert.deepEqual(fibonacciSeries(3), [0, 1, 1, 2]);
		assert.deepEqual(fibonacciSeries(5), [0, 1, 1, 2, 3, 5]);
	});
	// Validation test
	it('Check if function with valid input returns array of fibonacci numbers', () => {
		assert.isArray(fibonacciSeries(2), []);
	});
});
