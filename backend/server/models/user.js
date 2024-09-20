// User model for db
export const User = (sequelize, Sequelize) => {
    // Define user model
    const user = sequelize.define("user", {
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
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
        },
        // Define options
        {
            sequelize: sequelize,
            modelName: "Users",
            tableName: "user",
            timestamps: true,
        }
    );

    User.associate = (models) => {
        User.belongsTo(models.role, {
            foreignKey: "roleId", // Links roleId in User to roleId in Role
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        });
        User.hasMany(models.property, {
            through: "userSavedProperty"
        });
    };
    return user;
};
