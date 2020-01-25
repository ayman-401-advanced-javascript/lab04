'use strict';


const isString = input => typeof input === 'string';
const isNumber = input => typeof input === 'number';
const isArray = input => Array.isArray(input);
const isObject = input => typeof input === 'object' && !(input instanceof Array);
const isBoolean = input => typeof input === 'boolean';
const isFunction = input => typeof input === 'function';

class Validator {
  constructor(schema) {
    this.schema = schema;
  }

  
  isCorrectType( type) {
    if (type === 'string') { return true; }
    if (type === 'number') { return true; }
    if (type === 'array') { return true; }
    if (type === 'object') { return true; }
    if (type === 'boolean') { return true; }
    if (type === 'function') { return true; }
  }

  

  
}

module.exports = { Validator, isString, isNumber, isArray, isObject, isBoolean, isFunction };