import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import './db.mjs'
import path from 'path'
import session from 'express-session'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sessionOptions = {
    secret: 'secret',
    resave: true,
      saveUninitialized: true
};
// Production 
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const House = mongoose.model("House");

// logging
app.use((req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
});


// Routes below
app.post("/api/create-house", (req, res) => {
  new House({
    users: undefined,
    name: req.body.name,
  }).save((err) => {
    if (err) {
      res.sendStatus(500)
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  })
})


app.listen(process.env.PORT || 5000, console.log(`Server starting at ${process.env.PORT || 5000}`));
