//
export const Image = (sequelize, Sequelize) => {
    const image = sequelize.define("image", {
        imageId: {
            type: Sequelize.INTEGER,
            allowNull: false, // Foreign key, must reference a valid propertyId from Property model
            primaryKey: true,
            autoIncrement: true,
        },
        imageURL: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
    }, {
            sequelize: sequelize,
            modelName: "Image",
        }
    );

    Image.associate = (models) => {
        Image.belongsToMany(models.property, {
            through: "propertyImage",
            foreignKey: "propertyId",
        });
    };
    return image;
};