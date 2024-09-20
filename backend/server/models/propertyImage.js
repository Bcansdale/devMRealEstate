//

export const PropertyImage = (sequelize, Sequelize) => {
    const propertyImage = sequelize.define("propertyImage", {
        propertyId: {
            type: Sequelize.INTEGER,
            allowNull: true, // Foreign key, must reference a valid propertyId from Property model
        },
        imageId: {
            type: Sequelize.INTEGER,
            allowNull: true, // Foreign key, must reference a valid imageId from Image model
        },
        isPrimary: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    },
        {
            sequelize: sequelize,
            modelName: "PropertyType",
        }
    );

    // PropertyImage.associate = (models) => {
    //     PropertyImage.belongsTo(models.property, {
    //         foreignKey: 'propertyId'
    //     })
    //     PropertyImage.belongsToMany(models.property, {
    //         through: "propertyImage"
    //     })
    // }
    return propertyImage;
}
