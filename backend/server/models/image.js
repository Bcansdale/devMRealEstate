//

export const Image = (sequelize, Sequelize) => {
    return sequelize.define("image", {
        imageId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
            primaryKey: true,
        },
        imageURL: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
    }, {
            sequelize: sequelize,
            modelName: "Image",
            tableName: "image",
        }
    );
};