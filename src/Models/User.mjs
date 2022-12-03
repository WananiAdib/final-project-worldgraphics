import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	username: { type: String, required: true },
	givenName: { type: String, required: true },
	lastName: { type: String, required: true },
	house: { type: mongoose.Schema.Types.ObjectId, ref: "House" }, // a reference to a house
	profilePhoto: { type: String, required: false },
});

const User = mongoose.model("User", UserSchema);

export default User;
