import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import connect from "./src/Config/db.mjs";
import path from "path";
import session from "express-session";
import { fileURLToPath } from "url";
import passport from "passport";
import User from "./src/Models/User.mjs";
import House from "./src/Models/House.mjs";
import authRoutes from './src/Routes/auth.mjs'
import createHouseRoutes from './src/Routes/house.mjs'

const app = express();
connect();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sessionOptions = {
	secret: "secret",
	resave: true,
	saveUninitialized: true,
};
// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/dist"));
}
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


// logging
app.use((req, res, next) => {
	console.log(req.method, req.path, req.body);
	next();
});

app.use('/api/auth', authRoutes);

app.use('/api/house', createHouseRoutes);


app.listen(
	process.env.PORT || 5000,
	console.log(`Server starting at ${process.env.PORT || 5000}`)
);
