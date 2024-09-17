import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class address extends Model {}

address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines addressId as the primary key
        },
        addressLine1: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        addressLine2: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Address",
        tableName: "address", // Actual table name in the database

    }
);