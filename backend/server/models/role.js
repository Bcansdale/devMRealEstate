//
export const Role = (sequelize, Sequelize) => {
    //
    return sequelize.define("role", {
            roleId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,
            },
            roleName: {
                type: Sequelize.STRING(35), allowNull: false,
            },
        },
        {
            sequelize: sequelize,
            modelName: "Role",
            tableName: "role", // Actual table name in the database
        }
    );
};