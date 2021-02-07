/*
Fibonacci Test First Approach
------------------------------
Programming Pair : Liz Kamugisha & Rino Kitimbo
*/

/*
// TRIAL 1
const chai = require('chai');
const { assert } = chai;
const nthFibonacci = require('./fibonacci');

describe('fibonacci test', () => {
	// Unit 1 test
	it('check if fibonacci position 1 returns 0', () => {
		const result = nthFibonacci(1);
		assert.equal(result, 0, 'true');
	});
});
*/

// TRIAL 2
const chai = require('chai');
const { assert } = chai;

// const Fibonacci = require('../fibonacci');

const fibonacciSeries = require('../fibonacci');

describe('fibonacci', () => {
	// Unit one test.
	it('Check if value n = 1 returns [0,1]', () => {
		const result = fibonacciSeries(1);
		assert.isArray(result, [0, 1]);
	});
});
