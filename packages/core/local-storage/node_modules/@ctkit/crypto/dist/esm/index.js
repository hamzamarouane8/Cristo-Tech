import Cryptr from 'cryptr';
export var encrypt = function encrypt(secret, value) {
  if (!value) return value;
  var cryptr = new Cryptr(secret);
  return cryptr.encrypt(value);
};
export var decrypt = function decrypt(secret, value) {
  if (!value) return value;
  var cryptr = new Cryptr(secret);
  return cryptr.decrypt(value);
};