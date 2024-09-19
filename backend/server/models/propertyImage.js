//

export const PropertyImage = (sequelize, Sequelize) => {
    const PropertyImage = sequelize.define("propertyImage", {
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
            tableName: "propertyType",
        }
    );

    PropertyImage.associate = (models) => {
        PropertyImage.associate(models.property, {
            foreignKey: "propertyId",
            onDelete: "RESTRICT",
        });
        PropertyImage.associate(models.image, {
            foreignKey: "imageId",
            onDelete: "RESTRICTED",
        });
    };
    return PropertyImage
}
