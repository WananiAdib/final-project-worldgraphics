
// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

const Item = new mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, min: 1, required: true},
  checked: {type: Boolean, default: false, required: true}
}, {
  _id: true
});

// a grocery list
// * each list must have a related user
// * a list can have 0 or more items
const List = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  createdAt: {type: Date, required: true},
  items: [Item]
});