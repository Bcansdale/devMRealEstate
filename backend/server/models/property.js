//
export const Property = (sequelize, Sequelize) => {
    const Property = sequelize.define("property", {
        propertyId: {
            type: Sequelize.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines propertyId as the primary key
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
            type: Sequelize.INTEGER,
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
        dateCreated: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        dateUpdated: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
        userIdUpdated: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid userId from User model
        },
    },
        {
            sequelize: sequelize,
            modelName: "Property",
            tableName: "property", // Actual table name in the database
            timestamps: true,
        }
    );

    Property.associate = (models) => {
        Property.associate(models.address, {
            foreignKey: "addressId",
            onDelete: "RESTRICT",
        });
        Property.belongsTo(models.propertyTypeId, {
            foreignKey: "propertyTypeId",
            onDelete: "RESTRICTED",
        });
    }
    return Property;
}

