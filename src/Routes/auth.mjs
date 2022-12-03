import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import express from "express";
import User from "../Models/User.mjs";
import bcrypt from "bcrypt";

// Passport config
passport.use(
	new LocalStrategy((username, password, done) => {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false);
			}
			bcrypt.compare(password, user.password, (err, isValid) => {
				if (err) {
					return done(err);
				}
				if (!isValid) {
					return done(null, false);
				}
				return done(null, user);
			});
		});
	})
);

passport.serializeUser((user, cb) => {
	cb(null, user.username);
});

passport.deserializeUser((user, cb) => {
	return cb(null, user);
});

// Routes below
const router = express.Router();
router.get("/", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			user: req.user,
		});
	} else {
		res.status(200).json({
			success: false,
		});
	}
});
router.post("/register", async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		new User({
			email: req.body.email,
			password: hashedPassword,
			username: req.body.username,
			givenName: req.body.givenName,
			lastName: req.body.lastName,
			profilePhoto: req.body.profilePhoto || "",
		}).save((err) => {
			if (err) {
				res.sendStatus(500);
				console.log(err);
			} else {
				res.redirect("/");
			}
		});
	} catch {}
});

router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "login/success",
		failureRedirect: "login/failure",
	})
);

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successfull",
			user: req.user,
		});
	}
});

router.post("/logout", (req, res) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			success: true,
			message: "sucessfully logged out",
		});
	});
});

router.get("/login/failure", (req, res) => {
	res.sendStatus(401);
});

export default router;
