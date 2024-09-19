//
export const Address = (sequelize, Sequelize) => {
    return sequelize.define("address", {
        addressId: {
            type: Sequelize.INTEGER,
            autoIncrement: true, // Enables auto-increment
            primaryKey: true,    // Defines addressId as the primary key
        },
        addressLine1: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        addressLine2: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        zipCode: {
            type: Sequelize.STRING(35),
            allowNull: false,
        }
    },
        {
            sequelize: sequelize,
            modelName: "Address",
            tableName: "address",
        }
    );
};