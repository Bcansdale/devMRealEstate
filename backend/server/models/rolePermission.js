//
export const RolePermission = (sequelize, Sequelize) => {
    //
    return sequelize.define("rolePermission", {
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            permissionId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },
        {
            sequelize: sequelize,
            modelName: "RolePermission",
            tableName: "rolePermission", // Actual table name in the database
        }
    );
};