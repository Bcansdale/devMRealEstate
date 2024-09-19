//
export const UserSavedProperty = (sequelize, Sequelize) => {
    const UserSavedProperty = sequelize.define(
        "userSavedProperty", {
            // Define columns
            userId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            propertyId: {
                type: Sequelize.INTEGER,
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
