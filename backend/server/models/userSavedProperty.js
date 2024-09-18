import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class UserSavedProperty extends Model {}

UserSavedProperty.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "UserSavedProperty",
        tableName: "userSavedProperty", // Actual table name in the database
    }
)