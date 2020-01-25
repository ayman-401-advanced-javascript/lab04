'use strict';


const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'ayman' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'ayman' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });



   
  it('can update() a product', () => {
    let obj = { name:'ayman' };
    return categories.create(obj)
    .then(record => {
        record.name = 'kristen';
        return categories.update(record._id, record)
        .then(data => {
            return categories.get(data._id)
            .then(val => { 
                Object.keys(obj).forEach(key => {
                    expect(val[0][key]).toEqual(obj[key]);
                  });
              })
          });
      });
  });


  it('can delete() a product', () => {
       let obj = { name: 'ayman' };
        return categories.create(obj)
        .then(record => {
              return categories.get(record._id)
                  .then(val => {
                      return categories.delete(val._id)
                          .then(inp => {
                              expect(inp).toEqual(undefined);
                          })
                   });
          });
  });



});