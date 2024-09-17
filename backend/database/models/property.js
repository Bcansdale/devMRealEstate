import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class Property extends Model {}

Property.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines propertyId as the primary key
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid addressId from Address model
        },
        propertyTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        numBedrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numBathrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        squareFeet: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateUpdated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        userIdUpdated: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
    },
    {
        sequelize: db,
        modelName: "Property",
        tableName: "property", // Actual table name in the database
        timestamps: true,
    }
);
