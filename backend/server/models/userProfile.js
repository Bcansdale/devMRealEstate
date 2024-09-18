
// User Profile model for db
export const UserProfile = (sequelize, Sequelize) => {
    // Define user profile model
    const UserProfile = sequelize.define("userProfile", {
        // Define columns
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        addressId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid addressId from Address model
        },
        firstName: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
    });
// Define associations between models 
    UserProfile.associate = (models) => {
        UserProfile.belongsTo(models.user, {
            foreignKey: "userId", // Links userId in UserProfile to userId in User
            onDelete: "CASCADE",
        });
    };

    return UserProfile;
};
