import mongoose from "mongoose";

const Chore = new mongoose.Schema({
	name: { type: String, required: true },
	date: { type: String, required: true },
	category: { type: Date, required: true },
	assignee: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	status: { type: Boolean, default: false, required: true },
	approved: { type: Boolean, default: false, required: true },
	owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Expense = new mongoose.Schema({
	name: { type: String, required: true },
	date: { type: String, required: true },
	category: { type: Date, required: true },
	value: { type: Number, required: true },
	assignee: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	status: { type: Boolean, default: false, required: true },
	approved: { type: Boolean, default: false, required: true },
	owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const HouseSchema = new mongoose.Schema({
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	name: { type: String, required: true },
	chores: [Chore],
	expenses: [Expense],
});

const House = mongoose.model("House", HouseSchema);

export default House;
