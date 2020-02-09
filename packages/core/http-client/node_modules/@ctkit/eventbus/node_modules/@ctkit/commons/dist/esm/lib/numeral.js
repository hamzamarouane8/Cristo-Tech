import numeral from 'numeral'; // load a locale

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€'
  }
}); // switch between locales

numeral.locale('fr');
export default {
  format: function format(number, _format) {
    return numeral(number).format(_format || '0,0');
  }
};