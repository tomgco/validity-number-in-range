module.exports = createValidator

function createValidator(min, max) {

  // Sensible defaults
  if (typeof min === 'undefined') min = Number.NEGATIVE_INFINITY
  if (typeof max === 'undefined') max = Number.POSITIVE_INFINITY

  function validate(key, keyDisplayName, object, cb) {

    var num = object[key]

    // Null is allowed
    if (num === null) return cb(null)

    // num is not a number
    if (typeof num !== 'number') return cb(null, keyDisplayName + ' must be a number')

    // num is less than `min`
    if (num < min) return cb(null, keyDisplayName + ' must be at least ' + min)

    // num is more than `max`
    if (num > max) return cb(null, keyDisplayName + ' must be no greater than ' + max)

    // num is a number >= `min` and <= `max`. Success!
    return cb(null)

  }

  return validate

}