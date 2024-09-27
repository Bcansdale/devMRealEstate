//
export const Property = (sequelize, Sequelize) => {
    const property = sequelize.define(
        "property",
        {
            propertyId: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true, // Defines propertyId as the primary key
            },
            addressId: {
                type: Sequelize.INTEGER,
                allowNull: true, // Foreign key, must reference a valid addressId from Address model
            },
            propertyTypeId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            numBedrooms: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            numBathrooms: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            squareFeet: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            isAvailable: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.DATE("NOW"),
            },
            dateUpdated: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: true, // Foreign key, must reference a valid userId from User model
                defaultValue: 2,
            },
        },
        {},
    );

    property.associate = (models) => {
        property.belongsTo(models.address, {
            foreignKey: "addressId",
            onDelete: "RESTRICT",
        });
        property.belongsTo(models.propertyType, {
            foreignKey: "propertyTypeId",
            onDelete: "RESTRICT",
        });
        property.belongsToMany(models.image, {
            through: "propertyImage",
            foreignKey: "imageId",
        });
        property.belongsToMany(models.user, {
            through: "userSavedProperty",
            foreignKey: "userId",
        });
    };
    return property;
};
