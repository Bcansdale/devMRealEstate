import {User} from "./user.js";

export const UserSavedProperty = (sequelize, Sequelize) => {
    const UserSavedProperty = sequelize.define(
        "userSavedProperty", {
            // Define colums
            userId: {
                type: sequelize.INTEGER,
                allowNull: true,
            },
            propertyId: {
                type: sequelize.INTEGER,
                allowNull: true,
            },
        },
        {
            sequelize: sequelize,
            modelName: "UserSavedProperty",
            tableName: "userSavedProperty",
            timestamps: true,
        }
    );
    // associate the table with models
    // associate the table with other tables
    // foreign key
    UserSavedProperty.associate = (models) => {
        UserSavedProperty.associate(models.user, {
            foreignKey: "userId",
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        });
        UserSavedProperty.associate(models.property, {
            foreignKey: "propertyId",
            onDelete: "RESTRICTED",
            onUpdate: "CASCADE",
            });
    };
    return UserSavedProperty;
};


export class UserSavedProperty extends Model {
}

UserSavedProperty.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "UserSavedProperty",
        tableName: "userSavedProperty", // Actual table name in the database
    }
);