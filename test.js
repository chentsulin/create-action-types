'use strict'

var assert = require('assert')
var createActionTypes = require('./')

it('should ', function () {
	assert.strictEqual(createActionTypes('unicorns'), 'unicorns & rainbows')
});
