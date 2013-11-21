var createValidator = require('../')
  , assert = require('assert')

/* global describe, it */

describe('Number in range validator', function () {

  it('should callback with an error message if the input is not a number', function (done) {
    createValidator(16)('age', 'age', { age: 'sixteen' }, function (err, message) {
      assert.equal('age must be a number', message)
      done()
    })
  })

  it('should callback with an error message if the input is a number lower than the minimum', function (done) {
    createValidator(16)('age', 'age', { age: 15 }, function (err, message) {
      assert.equal('age must be at least 16', message)
      done()
    })
  })

  it('should callback with no message if the input is equal to the minimum', function (done) {
    createValidator(16)('age', 'age', { age: 16 }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should callback with no message if the input is equal to the maximum', function (done) {
    createValidator(undefined, 16)('age', 'age', { age: 16 }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should callback with no message if the input is greater than minimum', function (done) {
    createValidator(16)('age', 'age', { age: 46 }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should callback with no message if the input is greater than minimum and less than maximum', function (done) {
    createValidator(16, 100)('age', 'age', { age: 46 }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should callback with no message if the input is less than maximum', function (done) {
    createValidator(undefined, 100)('age', 'age', { age: 16 }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should callback with an error message if the input is a number greater than the maximum', function (done) {
    createValidator(undefined, 16)('age', 'age', { age: 46 }, function (err, message) {
      assert.equal('age must be no greater than 16', message)
      done()
    })
  })

  it('should allow max and min length to be the same and give a adequate error message', function (done) {
    createValidator(15, 15)('age', 'age', { age: 7 }, function (err, message) {
      assert(!err)
      assert.equal(message, 'age must be 15')
      done()
    })
  })

  it('should allow max and min length to be the same and validate', function (done) {
    createValidator(15, 15)('age', 'age', { age: 15 }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

  it('should allow null', function (done) {
    createValidator(undefined, 16)('age', 'age', { age: null }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

})