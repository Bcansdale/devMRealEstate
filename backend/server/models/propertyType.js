//
export const PropertyType = (sequelize, Sequelize) => {
    return sequelize.define("propertyType", {
        propertyTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
            primaryKey: true,
            autoIncrement: true,
        },
        typeName: {
            type: Sequelize.STRING,
            allowNull: false, // Foreign key, must reference a valid imageId from Image model
        },
    },
        {
            sequelize: sequelize,
            modelName: "PropertyType",
        }
    );
};