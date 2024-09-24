// User Profile model for db
export const UserProfile = (sequelize, Sequelize) => {
    // Define user profile model
    const userProfile = sequelize.define("userProfile", {
        // Define columns
        userId: {
            type: Sequelize.INTEGER,
            allowNull: true, // Foreign key, must reference a valid userId from User model
        },
        // addressId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: true, // Foreign key, must reference a valid addressId from Address model
        // },
        firstName: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
    });

    userProfile.associate = (models) => {
        userProfile.belongsTo(models.user, {
            foreignKey: "userId", // Links userId in UserProfile to userId in User
            as: "user",
            onDelete: "CASCADE",
        });
        // userProfile.belongsTo(models.address, {
        //     foreignKey: "addressId",
        // });
    };

    return userProfile;
};

// INSERT INTO "userProfile" ("userId", "firstName", "lastName", "addressId")
// VALUES (1, 'Alice', 'Smith', 1);
