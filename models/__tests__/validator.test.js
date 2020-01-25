'use strict';

const { isString, isNumber, isArray, isObject, isBoolean, isFunction } = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  let str;
  let num;
  let arr;
  let obj;
  let func;
  let bool;



  beforeEach(() => {
    str = 'yes';
    num = 1;
    arr = ['a'];
    obj = { x: 'y' };
    func = () => { };
    bool = false;
  });

  describe('.isString', () => {

    it('returns true when given a string', () => {
      expect(isString(str)).toBeTruthy();
    });
    
  });

  describe('.isNumber', () => {
   
    it('returns true when given a number', () => {
      expect(isNumber(num)).toBeTruthy();
    });
    
  });

  describe('.isArray', () => {
   
    it('returns true when given an array', () => {
      expect(isArray(arr)).toBeTruthy();
    });
   
  });

  describe('.isObject', () => {
   
    it('returns true when given an object', () => {
      expect(isObject(obj)).toBeTruthy();
    });
    
  });

  describe('.isFunction', () => {
   
    it('returns true when given a function', () => {
      expect(isFunction(func)).toBeTruthy();
    });
    
  });

  describe('.isBoolean', () => {
  
    it('returns true when given a boolean', () => {
      expect(isBoolean(bool)).toBeTruthy();
    });
  });
});

