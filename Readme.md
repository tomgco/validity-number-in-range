# validity-number-in-range

[![Build Status](https://travis-ci.org/bengourley/validity-number-in-range.png?branch=master)](https://travis-ci.org/bengourley/validity-number-in-range)

Validity style validator to ensure a property is numeric and within an upper and lower bound. `null` is allowed – use in conjunction with `validity.required` if this property must exist.

## Installation

    npm install validity-number-in-range

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , createRangeValidator = require('validity-number-in-range')

var schema = schemata(
    { age:
      { type: Number
      , validators: { all: [ createRangeValidator(18, 25) ] }
      }
    })

schema.validate({ age: 30 }, function (error, errorMessage) {
  console.log(errorMessage) //-> 'age must be no greater than 25'
})

schema.validate({ age: 20 }, function (error, errorMessage) {
  console.log(errorMessage) //-> undefined
})
```

## API

### var validate = createRangeValidator(Number:min, Number:max)

Pass in the minimum and maximum numeric values allowed. These are inclusive – i.e. with
`min=10` and `max=20`, `10` and `20` are both valid. Both `max` and `min` are optional.

**Defaults:** `min=Number.NEGATIVE_INFINITY`, `max=Number.POSITIVE_INFINITY`

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a [validity](https://npmjs.org/package/validity) compatible function, which in turn is
used by [schemata](https://npmjs.org/package/schemata) for schema validation.

The callback signature `cb(err, errorMessage)`.
- `err` is an `Error` object if something bad happened and `null` otherwise.
- `errorMessage` is a `String` if a validation error happened and `undefined` otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)