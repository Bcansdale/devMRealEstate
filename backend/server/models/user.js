// User model for db
export const User = (sequelize, Sequelize) => {
    // Define user model
    return sequelize.define("user", {
        // Define columns
        userId: {
            type: Sequelize.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true, // Defines userId as the primary key
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
            modelName: "User",
            tableName: "user", // Actual table name in the database
            timestamps: true,
        });
};
