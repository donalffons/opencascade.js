// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
var DecimalPrecision = (function () {
  if (Math.trunc === undefined) {
    Math.trunc = function (v) {
      return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
  }
  var decimalAdjust = function myself(type, num, decimalPlaces) {
    if (type === 'round' && num < 0)
      return -myself(type, -num, decimalPlaces);
    var shift = function (value, exponent) {
      value = (value + 'e').split('e');
      return +(value[0] + 'e' + (+value[1] + (exponent || 0)));
    };
    var n = shift(num, +decimalPlaces);
    return shift(Math[type](n), -decimalPlaces);
  };
  return {
    // Decimal round (half away from zero)
    round: function (num, decimalPlaces) {
      return decimalAdjust('round', num, decimalPlaces);
    },
    // Decimal ceil
    ceil: function (num, decimalPlaces) {
      return decimalAdjust('ceil', num, decimalPlaces);
    },
    // Decimal floor
    floor: function (num, decimalPlaces) {
      return decimalAdjust('floor', num, decimalPlaces);
    },
    // Decimal trunc
    trunc: function (num, decimalPlaces) {
      return decimalAdjust('trunc', num, decimalPlaces);
    },
    // Format using fixed-point notation
    toFixed: function (num, decimalPlaces) {
      return decimalAdjust('round', num, decimalPlaces).toFixed(decimalPlaces);
    }
  };
})();

export default DecimalPrecision;
