//
export const Permission = (sequelize, Sequelize) => {
    //
    const permission = sequelize.define(
        "permission",
        {
            permissionId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true, // Defines permissionId as the primary key
            },
            permissionName: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {},
    );
    permission.associate = (models) => {
        permission.belongsToMany(models.role, {
            through: "rolePermission",
            foreignKey: "permissionId",
        });
    };
    return permission;
};

//INSERT INTO "permission" ("permissionId", "permissionName")
// VALUES (3, 'test');
