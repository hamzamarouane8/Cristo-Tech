import _keyBy from 'lodash.keyby';
export default {
  keyBy: function keyBy(array, iteratee) {
    return _keyBy(array, iteratee);
  }
};