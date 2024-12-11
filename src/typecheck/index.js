const typeValidators = {
  string: i => typeof i === 'string' || i instanceof String,
  int:  i => Number.isInteger(i) && i % 1 === 0,
  float: i => Number(i) ===i && i % 1 > 0,
  number: i => Number(i) ===i,
  bool: i => typeof i === 'boolean'
}
function typeCheck(object) {
  const handler = {
    set(target, prop, receiver) {
      const parts = prop.split('_')
      const typeDef = parts.slice('-1')
      const typeValidator = typeValidators[typeDef]
      if(typeValidator && parts.length > 1 && !typeValidator(receiver)){
        return false
      }
      target[prop] = receiver;
      return true
    }
  }
  let proxyObj = new Proxy({}, handler)
  for(let key in object) {
    proxyObj[key] = object[key]
  }
  return proxyObj
}

module.exports = typeCheck;
