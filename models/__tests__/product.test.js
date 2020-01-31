'use strict';


const Products = require('../../products.js');

describe('product Model', () => {

  let product;

  beforeEach(() => {
    product = new Products();
  });

  it('can post() a new product', () => {
    let obj = { weight: 60 };
    return product.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a product', () => {
    let obj = { weight: 50 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  
  
  it('can update() a product', () => {
    let obj = { weight :40 };
    return product.create(obj)
      .then(record => {
        record.weight = 11;
        return product.update(record._id, record)
          .then(data => {
            return product.get(data._id)
              .then(val => {
                  
                Object.keys(obj).forEach(key => {
                  expect(val[0][key]).toEqual(obj[key]);
                });
              });
          });
      });
  });


  it('can delete() a product', () => {
    let obj = { quantity_in_stock: 70 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(val => {
            return product.delete(val._id)
              .then(inp => {
                expect(inp).toEqual(undefined);
              });
          });
      });
  });




});