//
export const Role = (sequelize, DataTypes) => {
    //
    return sequelize.define("role", {
            roleId: {
                type: DataTypes.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,
            },
            roleName: {
                type: DataTypes.STRING(35), allowNull: false,
            },
        },
        {
            sequelize: sequelize,
            modelName: "Role",
            tableName: "role", // Actual table name in the database
        }
    );
};