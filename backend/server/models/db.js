import { Sequelize, DataTypes } from "sequelize";
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
import { Role } from "./role.js";
import { RolePermission } from "./rolePermission.js";
import { Permission } from "./permission.js";
import { UserSavedProperty } from "./userSavedProperty.js";
import { Address } from "./address.js";
import { Property } from "./property.js";
import { PropertyType } from "./propertyType.js";
import { Image } from "./image.js";
import { PropertyImage } from "./propertyImage.js";


// Associating models for use in the db
const user = User(sequelize, Sequelize.DataTypes);
const userProfile = UserProfile(sequelize, Sequelize.DataTypes);
const role = Role(sequelize, Sequelize.DataTypes);
const rolePermission = RolePermission(sequelize, Sequelize.DataTypes);
const permission = Permission(sequelize, Sequelize.DataTypes);
// const userSavedProperty = UserSavedProperty(sequelize, Sequelize.DataTypes);
// const address = Address(sequelize, Sequelize.DataTypes);
// const property = Property(sequelize, Sequelize.DataTypes);
// const propertyType = PropertyType(sequelize, Sequelize.DataTypes);
// const image = Image(sequelize, Sequelize.DataTypes);
// const propertyImage = PropertyImage(sequelize, Sequelize.DataTypes);


// Storing the models in the db object
db[user.name] = user;
db[userProfile.name] = userProfile;
db[role.name] = role;
db[rolePermission.name] = rolePermission;
db[permission.name] = permission;
// db[userSavedProperty.name] = userSavedProperty;
// db[address.name] = address;
// db[property.name] = property;
// db[propertyType.name] = propertyType;
// db[image.name] = image;
// db[propertyImage.name] = propertyImage;

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
