import { Sequelize } from "sequelize";
// environment setup for db. Sets the db name and other configs
import config from "../config.json" with { type: "json" };

const env = "development";
const dbConfig = config[env];

// Initializing an empty object to store db models
const db = {};

// Create a new Sequelize instance, passing in the database name, username, and password
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig,
);

// Importing models
import { User } from "./user.js";
import { UserProfile } from "./userProfile.js";

// Associating models for use in the db
const user = User(sequelize, Sequelize.DataTypes);
const userProfile = UserProfile(sequelize, Sequelize.DataTypes);

// Storing the models in the db object
db[user.name] = user;
db[userProfile.name] = userProfile;

// Setting up relationships between models
Object.keys(db).forEach((modelName) => {
    // check if the model has an associate method
    if (db[modelName].associate) {
        // if the model has an associate method, call it
        db[modelName].associate(db);
    }
});

// Exporting the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
