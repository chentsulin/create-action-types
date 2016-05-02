import assert from 'assert';
import create from './';

it('should generate correct actionTypes', () => {
  const types = create([
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER',
  ]);

  assert.strictEqual(types.INCREMENT_COUNTER, 'INCREMENT_COUNTER');
  assert.strictEqual(types.DECREMENT_COUNTER, 'DECREMENT_COUNTER');
});

it('should throw when action type has been declared twice', () => {
  try {
    create([
      'INCREMENT_COUNTER',
      'INCREMENT_COUNTER',
    ]);
  } catch (e) {
    assert.equal(
      e.message,
      'action type `INCREMENT_COUNTER` has been declared. Should not declare a constant twice.'
    );
  }
});
