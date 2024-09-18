//
export const Permission = (sequelize, DataTypes) => {
    //
    return sequelize.define("rolePermission", {
            permissionId: {
                type: DataTypes.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,    // Defines permissionId as the primary key
            },
            permissionName: {
                type: DataTypes.STRING(35),
                allowNull: false,
            },
        },
        {
            sequelize: sequelize,
            modelName: "Permission",
            tableName: "permission", // Actual table name in the database
        }
    );
};
