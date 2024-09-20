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
import { createRoles } from "./seed/roleSeed.js";
import { createPermissions } from "./seed/permissionSeed.js";
import { createAddresses } from "./seed/addressSeed.js";

import { createProperties } from "./seed/propertySeed.js";
import { createPropertyTypes } from "./seed/propertyTypeSeed.js";
import { createImages } from "./seed/imageSeed.js";



db.sequelize.sync({ force: true }).then(function () {
    // create temp data for testing, remove after testing is done
    console.log("Database successfully created");
    createPermissions(db).then(() => console.log("Permissions successfully created"));
    console.log("Permissions successfully created");
    createRoles(db).then(() => console.log("Roles successfully created"));
    console.log('Roles successfully created');
    createUsers(db).then(() => console.log("Users successfully created"));
    console.log('Users successfully created');
    createAddresses(db).then(() => console.log("Addresses successfully created"));
    console.log('Addresses successfully created');
    createProperties(db).then(() => console.log("Properties successfully created"));
    console.log('Properties successfully created');
    createImages(db).then(() => console.log("Images successfully created"));
    console.log('Images successfully created');
    createPropertyTypes(db).then(() => console.log("Property Types successfully created"));
    console.log('Property Types successfully created');


    // Server
    // Dependent on the database being set up and populated with test data before it can start listening for requests
    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () => console.log("http://localhost:5539"));
});
