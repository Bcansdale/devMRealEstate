// models/userModel.js
import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class User extends Model {}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines userId as the primary key
        },
        username: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "User",
        tableName: "users", // Actual table name in the database
        timestamps: true,  // Enable createdAt and updatedAt
    }
);

export default User;