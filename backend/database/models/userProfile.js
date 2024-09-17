import { DataTypes, Model } from "sequelize";
import connectToDB from "../db.js";

// Connect to the database
export const db = await connectToDB("postgresql:///devm");

export class UserProfile extends Model {}

UserProfile.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid addressId from Address model
        },
        firstName: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "UserProfile",
        tableName: "userProfile",
        timestamps: true,
    }
);

// Associations
UserProfile.associate = (models) => {
    UserProfile.belongsTo(models.User, {
        foreignKey: "userId", // Links userId in UserProfile to userId in User
        onDelete: "CASCADE",
    });
};

export default UserProfile;