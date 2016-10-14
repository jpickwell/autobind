module.exports = function autobind(self, _proto)
{
  var key, parentProto, proto;

  proto = _proto;
  if(proto == null)
  {
    proto = self.constructor.prototype;
  }

  for(key of Object.getOwnPropertyNames(proto))
  {
    if(key === 'constructor' || typeof self[key] !== 'function')
    {
      continue;
    }

    self[key] = self[key].bind(self);
  }

  parentProto = Reflect.getPrototypeOf(proto);
  if(parentProto !== Object.prototype)
  {
    autobind(self, parentProto);
  }
}
