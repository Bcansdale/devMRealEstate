import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export default class Role extends Model {}

Role.init(
    {
        roleId: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines roleId as the primary key
        },
        roleName: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Role",
        tableName: "roles", // Actual table name in the database
    }
)