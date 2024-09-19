//
export const Permission = (sequelize, Sequelize) => {
    //
     const Permission = sequelize.define("rolePermission", {
            permissionId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,    // Defines permissionId as the primary key
            },
            permissionName: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {
            sequelize: sequelize,
            modelName: "Permission",
            tableName: "permission", // Actual table name in the database
        }
    );
    Permission.associate = (models) => {
        Permission.belongsToMany(models.role,
            { through: "rolePermission" });
    };
    return Permission;
};
