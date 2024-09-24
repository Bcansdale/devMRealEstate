//
export const Role = (sequelize, Sequelize) => {
    const role = sequelize.define(
        "role",
        {
            roleId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,
            },
            roleName: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {},
    );

    role.associate = (models) => {
        role.belongsToMany(models.permission, {
            through: "rolePermission",
            foreignKey: "roleId",
        });
    };

    return role;
};

//INSERT INTO "role" ("roleId", "roleName")
// VALUES (3, 'test');
