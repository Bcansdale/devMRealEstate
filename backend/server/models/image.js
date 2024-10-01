//
export const Image = (sequelize, Sequelize) => {
    const image = sequelize.define(
        "image",
        {
            imageId: {
                type: Sequelize.INTEGER,
                allowNull: false, // Foreign key, must reference a valid propertyId from Property model
                primaryKey: true,
                autoIncrement: true,
            },
            src: { // alias/mapped name
                field: "imageURL", // db column
                type: Sequelize.STRING(500),
                allowNull: false,
            },
        },
        {},
    );

    image.associate = (models) => {
        image.belongsToMany(models.property, {
            through: "propertyImage",
            foreignKey: "imageId",
        });
    };
    return image;
};
