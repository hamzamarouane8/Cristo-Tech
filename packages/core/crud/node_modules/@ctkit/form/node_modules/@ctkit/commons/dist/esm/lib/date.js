import moment from 'moment';
import isNumber from 'lodash.isnumber';
export default {
  format: function format(date, _format) {
    return moment(date).format(_format || 'DD/MM/YYYY');
  },
  parse: function parse(str, format) {
    if (!str) return null;
    if (isNumber(str)) return moment(str).toDate();
    return moment(str, format || 'DD/MM/YYYY').toDate();
  },
  minusMonth: function minusMonth(number) {
    return moment().subtract(number, 'months').toDate();
  },
  plusYears: function plusYears(number) {
    return moment().add(number, 'years').toDate();
  },
  plusMonths: function plusMonths(number) {
    return moment().add(number, 'months').toDate();
  },

  /**
   * timestamp value
   * @param value
   * @returns {number}
   */
  valueOf: function valueOf(value) {
    if (!value) return null;
    return moment(value).valueOf();
  }
};