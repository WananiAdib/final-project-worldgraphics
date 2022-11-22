import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import './db.mjs'
import path from 'path'
import session from 'express-session'
import bcrypt from "bcrypt";
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
  app.use(express.static('client/dist'));
}
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const House = mongoose.model("House");
const User = mongoose.model("User")

// logging
app.use((req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
});


// Routes below
app.post("/api/create-house", (req, res) => {
  
  new House({
    users: req.body.users,
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

app.post("/api/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    new User({
      email: req.body.email,
      password: hashedPassword,
      username: req.body.username,
      givenName: req.body.givenName,
      lastName: req.body.lastName,
      profilePhoto: req.body.profilePhoto || ""
    }).save((err) => {
      if (err) {
        res.sendStatus(500)
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    })
  } catch {
  }
})

app.listen(process.env.PORT || 5000, console.log(`Server starting at ${process.env.PORT || 5000}`));
