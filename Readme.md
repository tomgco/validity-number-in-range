# validity-number-in-range

Validity style validator to ensure a property is numeric and within an upper and lower bound.

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

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)