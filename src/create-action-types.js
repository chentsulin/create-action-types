
export default function(types) {
  return types.reduce((result, key) => {
    result[key] = key;
    return result;
  }, {});
}
