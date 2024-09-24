// User model for db
export const User = (sequelize, Sequelize) => {
    // Define user model
    const user = sequelize.define(
        "user",
        {
            // Define columns
            userId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true, // Defines userId as the primary key
            },
            roleId: {
                type: Sequelize.INTEGER, // foreign key from role
                allowNull: true,
            },
            username: {
                type: Sequelize.STRING(35),
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                    isEmail: true,
                },
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
        },
        {},
    );

    user.associate = (models) => {
        user.belongsTo(models.role, {
            foreignKey: "roleId",
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        });

        user.hasOne(models.userProfile, {
            foreignKey: "userId",
            as: "userProfile", // Alias matches the one used in queries
            onDelete: "CASCADE",
            hooks: true,
        });

        user.belongsToMany(models.property, {
            through: "userSavedProperty",
            foreignKey: "userId",
            otherKey: "propertyId",
        });
    };
    return user;
};

//INSERT INTO "user" ("roleId", "username", "password", "createdAt", "updatedAt")
// VALUES (2, 'alice@example.com', 'hashed_password_here', NOW(), NOW())
// RETURNING "userId";
