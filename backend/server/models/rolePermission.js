//
export const RolePermission = (sequelize, Sequelize) => {
    //
    return sequelize.define(
        "rolePermission",
        {
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            permissionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {},
    );
};
