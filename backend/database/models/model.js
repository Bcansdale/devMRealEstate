import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";
import * as util from "node:util";
// import bcryptjs from "bcryptjs";

export const db = await connectToDB("postgresql:///devm");

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

User.init({
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    roleID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dateUpdated: {
        type: DataTypes.DATE,
    }
},
    {
        modelName: "user",
        sequelize: db,
    }
);