//
export const RolePermission = (sequelize, Sequelize) => {
    //
    const RolePermission = sequelize.define("rolePermission", {
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

    // Define associations
    RolePermission.associate = (models) => {
        RolePermission.belongsTo(models.role, {
            foreignKey: "roleId", // Links roleId in RolePermission to roleId in Role
            onDelete: "RESTRICT",
        });
        RolePermission.belongsTo(models.permission, {
            foreignKey: "permissionId", // Links permissionId in RolePermission to permissionId in Permission
            onDelete: "RESTRICT",
        });
    };
    return RolePermission;
};