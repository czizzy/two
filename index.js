require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const findIndex = require('lodash/findIndex');
const one = require('the-number-one')
const five = require('five')
const fourtytwo = require('meaning-of-life')
const is = require('is-equal-to')

function two() {
	const threeNumbers = [one, five(), fourtytwo]
	return findIndex(threeNumbers, item => is(item, fourtytwo));
}

module.exports = two;