import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import session from 'express-session'

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json())
app.use(
    session({
        secret: "hello",
        saveUninitialized: false,
        resave: false,
    })
);

ViteExpress.config({ printViteDevServerHost: true });
ViteExpress.listen(app, 5539, () => console.log("http://localhost:5539"))