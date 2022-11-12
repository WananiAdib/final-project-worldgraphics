import mongoose from "mongoose";
// 1ST DRAFT DATA MODEL

const User = new mongoose.Schema({
    // email given by authentification plugin
    // password hash provided by authentication plugin
    givenName: {type: String, required: true},
    lastName: {type: String, required: true},
    house: {type: mongoose.Schema.Types.ObjectId, ref:'House'}, // a reference to a house
    profilePhoto: {type: String, required: false},
});

const Chore = new mongoose.Schema({
    name: {type: String, required: true}, 
    date: {type: String, required: true}, 
    category: {type: Date, required: true},
    assignee: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    status: {type: Boolean, default: false, required: true},
    approved: {type: Boolean, default: false, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

const Expense = new mongoose.Schema({
    name: {type: String, required: true}, 
    date: {type: String, required: true}, 
    category: {type: Date, required: true},
    value: {type: Number, required: true},
    assignee: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    status: {type: Boolean, default: false, required: true},
    approved: {type: Boolean, default: false, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  });
  
const House = new mongoose.Schema({
    users: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    name: {type: String, required: true},
    chores: [Chore],
    expenses:[Expense],
});

mongoose.model("House", House);
mongoose.model("User", User);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hw05');