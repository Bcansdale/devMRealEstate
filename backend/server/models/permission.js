import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class Permission extends Model {}

Permission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines permissionId as the primary key
        },
        permissionName: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Permission",
        tableName: "permission", // Actual table name in the database
    }
)