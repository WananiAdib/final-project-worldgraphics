import LocalStrategy from "passport-local"
const initialize = (passport) => {
    const verify = (username, password, cb) => {
        
    }
    passport.use(new LocalStrategy(verify));
    passport.serializeUser((user, cb) =>  {

    })
    passport.deserializeUser((user, cb) => {

    })
}