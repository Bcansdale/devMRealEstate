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
    })
);

// Database and seed data
import db from "./models/db.js";
import { createUsers } from "./seed/userSeed.js";
import { createRoles } from "./seed/roleSeed.js";
import { createPermissions } from "./seed/permissionSeed.js";
import { createAddresses } from "./seed/addressSeed.js";
import { createProperties } from "./seed/propertySeed.js";
import { createPropertyTypes } from "./seed/propertyTypeSeed.js";
import { createImages } from "./seed/imageSeed.js";
import { createCompleteUser } from "./seed/completeUser.js";

// Synchronize database and seed data
db.sequelize.sync({ force: true }).then(async function () {
    console.log("Database successfully created");

    try {
        // Ensure seeding happens in a specific order to maintain dependencies

        // 1. Seed permissions
        await createPermissions(db);
        console.log("Permissions successfully created");

        // 2. Seed roles
        await createRoles(db);
        console.log("Roles successfully created");

        // 3. Seed users (optional if unrelated to complete user)
        await createUsers(db);
        console.log("Users successfully created");

        // 4. Seed addresses (if needed for the user profile)
        await createAddresses(db);
        console.log("Addresses successfully created");

        // 5. Seed property types
        await createPropertyTypes(db);
        console.log("Property Types successfully created");

        // 6. Seed images
        await createImages(db);
        console.log("Images successfully created");

        // 7. Seed properties
        await createProperties(db);
        console.log("Properties successfully created");

        // 8. Finally, create the complete user
        await createCompleteUser(db);
        console.log("Complete User successfully created");

    } catch (err) {
        console.error("Error during seeding:", err);
    }

    // Start the server after seeding is complete
    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () => console.log("Server running on http://localhost:5539"));
});