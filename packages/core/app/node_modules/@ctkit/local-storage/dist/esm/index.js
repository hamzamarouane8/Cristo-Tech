import store from 'store';
import { encrypt, decrypt } from '@ctkit/crypto';
export var set = function set(key, value, encryptKey) {
  if (encryptKey) {
    store.set(key, encrypt(encryptKey, value));
  } else {
    store.set(key, value);
  }
};
export var map = function map(indicator) {
  store.each(function (value, key) {
    if (indicator === key) remove(key);
  });
};
export var get = function get(key, decryptWith) {
  if (decryptWith) {
    var value = store.get(key);
    if (!value) return value;
    return decrypt(decryptWith, value);
  } else {
    return store.get(key);
  }
};
export var remove = function remove(key) {
  return store.remove(key);
};
export var reset = function reset() {
  return store.clearAll();
};