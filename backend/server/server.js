import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";

// Express setup
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
    session({
        secret: "hello",
        saveUninitialized: false,
        resave: false,
    }),
);

// Database
import db from "./models/db.js";
import { createUsers } from "./seed/userSeed.js";
// import { createProperties } from "./seeds/property.js";

db.sequelize.sync({ force: true }).then(function () {
    // create temp data for testing, remove after testing is done
    createUsers(db).then(() => console.log("Users successfully created"));
    // createProperties(db).then(() =>
    //   console.log("Properties successfully created"),
    // );


    // Server
    // Dependent on the database being set up and populated with test data before it can start listening for requests
    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () => console.log("http://localhost:5539"));
});
