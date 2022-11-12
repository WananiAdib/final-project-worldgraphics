import express from 'express'
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

app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes below


app.listen(process.env.PORT || 5000);
