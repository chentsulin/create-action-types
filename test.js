import assert from 'assert';
import create from './';

it('should generate correct actionTypes', () => {
  const types = create([
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER'
  ]);

  assert.strictEqual(types.INCREMENT_COUNTER, 'INCREMENT_COUNTER');
  assert.strictEqual(types.DECREMENT_COUNTER, 'DECREMENT_COUNTER');
});

it('should generate correct actionTypes when value repeat', () => {
  const types = create([
    'INCREMENT_COUNTER',
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER',
    'DECREMENT_COUNTER'
  ]);

  assert.strictEqual(types.INCREMENT_COUNTER, 'INCREMENT_COUNTER');
  assert.strictEqual(types.DECREMENT_COUNTER, 'DECREMENT_COUNTER');
});
