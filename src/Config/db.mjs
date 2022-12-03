import mongoose from "mongoose";

const connect = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_URI || "mongodb://localhost/homies"
		);
		console.log("Connected to MongoDB.");
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

export default connect;
