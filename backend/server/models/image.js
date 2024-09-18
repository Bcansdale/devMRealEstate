import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
            primaryKey: true,
        },
        imageURL: {
            type: DataTypes.STRING(500),
            allowNull: false,
        }
    },{
        sequelize: db,
        modelName: "PropertyImage",
        tableName: "propertyImage",
    },
)