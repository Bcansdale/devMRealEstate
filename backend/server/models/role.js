//
export const Role = (sequelize, Sequelize) => {
    //
    const role = sequelize.define("role", {
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
        {
            sequelize: sequelize,
            modelName: "Role",
        }
    );
    Role.associate = (models) => {
        Role.belongsToMany(models.permission, { through: "rolePermission" });
    };
    return role;
};