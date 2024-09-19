//
export const Permission = (sequelize, Sequelize) => {
    //
     const permission = sequelize.define("permission", {
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
        }
    );
    Permission.associate = (models) => {
        Permission.belongsToMany(models.role,
            { through: "rolePermission" });
    };
    return permission;
};
