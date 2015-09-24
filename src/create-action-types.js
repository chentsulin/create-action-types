import invariant from 'invariant';


export default function(types) {
  return types.reduce((result, key) => {
    invariant(
      result[key] === undefined,
      'action type `%s` has been declared. Should not declare a constant twice.',
      key
    );
    result[key] = key;
    return result;
  }, {});
}
