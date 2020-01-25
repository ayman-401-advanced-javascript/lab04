'use strict';

const DataModel = require('../memory-data-model.js');


class Categories extends DataModel {
  constructor() {
    super({
      fields: {
        id: { required: true },
        name: { required: true },
      },
    });
  }
}

module.exports = Categories;