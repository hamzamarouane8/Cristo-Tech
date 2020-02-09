import sum from 'lodash.sum';
import get from 'lodash.get';
var Math = {
  sumValues: function sumValues(map) {
    if (!map) return 0;
    var values = Object.values(map).map(function (it) {
      return parseInt(it);
    });
    return sum(values);
  },
  sumBy: function sumBy(array, key) {
    if (!array) return 0;
    return sum(array.map(function (item) {
      return parseInt(get(item, key) || 0);
    }));
  }
};
export default Math;