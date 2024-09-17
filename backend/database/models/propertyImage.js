import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class PropertyImage extends Model {}

PropertyImage.init({
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Foreign key, must reference a valid propertyId from Property model
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Foreign key, must reference a valid imageId from Image model
    },
    isPrimary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: db,
    modelName: "PropertyType",
    tableName: "propertyType",
})