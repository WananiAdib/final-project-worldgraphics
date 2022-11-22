import LocalStrategy from "passport-local"
import './db.mjs';
import bcrypt from 'bcrypt'
import mongoose from "mongoose"

const User = mongoose.model("User")
const initialize = (passport) => {
    const verify = (username, password, cb) => {
        User.findOne({username: username}, (err, user) => {
            if (!err & user) {
                bcrypt.compare(password, user.password, (err, passwordMatch) => {
                    if (passwordMatch) {
                        return cb(null, user);
                    } else {
                        return cb(null, false, {message: 'Incorrect password or username.'})
                    }
                })
            }
                return cb(null, false, { message: 'Incorrect username or password.' })
        })
    }
    passport.use(new LocalStrategy(verify));
    passport.serializeUser((user, cb) =>  {

    })
    passport.deserializeUser((user, cb) => {

    })
}