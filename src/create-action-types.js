import assign from 'object-assign'


export default function (types) {
  return types
    .map(type => { return { [type]: type }})
    .reduce((prev, curr) => assign(prev, curr))
}
