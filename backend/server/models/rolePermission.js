import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class RolePermission extends Model {}

RolePermission.init(
    {
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid roleId from Role model
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid permissionId from Permission model
        },
    },
    {
        sequelize: db,
        modelName: "RolePermission",
        tableName: "rolePermissions", // Actual table name in the database
    }
)