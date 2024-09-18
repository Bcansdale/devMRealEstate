import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class PropertyType extends Model {}

PropertyType.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Foreign key, must reference a valid propertyId from Property model
        primaryKey: true,
    },
    typeName: {
        type: DataTypes.STRING,
        allowNull: false, // Foreign key, must reference a valid imageId from Image model
    },
}, {
    sequelize: db,
    modelName: "PropertyType",
    tableName: "propertyType",
})