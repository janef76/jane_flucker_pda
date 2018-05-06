var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to multiply 3 x 5 = 15', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide 21 / 7 = 3', function () {
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to add 1 + 4 = 5', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract 7 - 4 = 3', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple numbers', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 135);
  })

  it('should be able to click on +', function () {
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  })

  it('should be able to chain multiple operations together', function () {
    calculator.numberClick(8);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12);
  })

  it('should be able to clear running total', function () {
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
