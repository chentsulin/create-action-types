'use strict'

var assert = require('assert')
var create = require('./')

it('should generate correct actionTypes', function () {
  var types = create([
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER'
  ])

  assert.strictEqual(types.INCREMENT_COUNTER, 'INCREMENT_COUNTER')
	assert.strictEqual(types.DECREMENT_COUNTER, 'DECREMENT_COUNTER')
})

it('should generate correct actionTypes when value repeat', function () {
  var types = create([
    'INCREMENT_COUNTER',
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER',
    'DECREMENT_COUNTER'
  ])

  assert.strictEqual(types.INCREMENT_COUNTER, 'INCREMENT_COUNTER')
  assert.strictEqual(types.DECREMENT_COUNTER, 'DECREMENT_COUNTER')
})
