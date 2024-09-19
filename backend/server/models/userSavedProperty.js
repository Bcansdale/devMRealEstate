//
export const UserSavedProperty = (sequelize, Sequelize) => {
    return sequelize.define(
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
            timestamps: true,
        }
    );
};
