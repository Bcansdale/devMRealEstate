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



// Database and seed data
import db from "./models/db.js";
import { createUsers } from "./seed/userSeed.js";
import { createRoles } from "./seed/roleSeed.js";
import { createPermissions } from "./seed/permissionSeed.js";
import { createProperties } from "./seed/propertySeed.js";
import { createPropertyTypes } from "./seed/propertyTypeSeed.js";

db.sequelize.sync({ force: true }).then(async function () {
    console.log("Database successfully created");

    try {
        // create temp data for testing, remove after testing is done
        await createPermissions(db).then(() =>
            console.log("Permissions successfully created"),
        );
        await createRoles(db).then(() => console.log("Roles successfully created"));
        await createUsers(db).then(() => console.log("Users successfully created"));
        await createPropertyTypes(db).then(() =>
            console.log("Property types successfully created"),
        );
        await createProperties(db).then(() =>
            console.log("Properties successfully created"),
        );
    } catch (err) {
        console.error("Error during seeding:", err);
    }

    app.set("db", db);

    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () =>
        console.log("Server running on http://localhost:5539"),
    );
});

// Routes
import user from "./routes/user.js";
import auth from "./routes/auth.js";
import properties from "./routes/properties.js";

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/properties", properties);