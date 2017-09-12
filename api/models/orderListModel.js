'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  order_id : {
      type : Number
  },
  name: {
    type: String
  },
  address: {
    type: String,
    required: 'Kindly enter the customer address of the Order'
  },
  item : {
      type : String
  },
  Created_at: {
    type: Date,
    required : true,
    default: Date.now
  }
  
});

module.exports = mongoose.model('Orders', OrderSchema);