module.exports = createValidator

function createValidator(min, max) {

  // Sensible defaults
  if (typeof min === 'undefined') min = Number.NEGATIVE_INFINITY
  if (typeof max === 'undefined') max = Number.POSITIVE_INFINITY

  function validate(key, keyDisplayName, object, callback) {

    var num = object[key]

    // num is not a number
    if (typeof num !== 'number') return callback(null, keyDisplayName + ' must be a number')

    // num is less than `min`
    if (num < min) return callback(null, keyDisplayName + ' must be at least ' + min)

    // num is more than `max`
    if (num > max) return callback(null, keyDisplayName + ' must be no greater than ' + max)

    // num is a number >= `min` and <= `max`. Success!
    return callback(null, undefined)

  }

  return validate

}