import { properties } from "../data/properties.js";

export const createProperties = async function createProperties(db) {
    for (const property of properties) {
        const address = property.address;
        const propertyPhotos = property.photos;

        let photos = propertyPhotos.map((photo) => {
            return {
                src: photo.src,
                propertyImage: {
                    isPrimary: photo.isPrimary,
                },
            };
        });

        await db.property.create(
            {
                propertyTypeId: property.propertyTypeId,
                title: property.title,
                description: property.description,
                price: property.price,
                numBedrooms: property.numBedrooms,
                numBathrooms: property.numBathrooms,
                squareFeet: property.squareFeet,
                isAvailable: property.isAvailable,
                userId: property.userId,
                address: {
                    addressLine1: address.addressLine1,
                    addressLine2: address.addressLine1,
                    city: address.city,
                    state: address.state,
                    postalCode: address.postalCode,
                },
                images: photos,
            },
            {
                include: [
                    {
                        model: db.sequelize.models.address,
                        as: "address",
                    },
                    {
                        model: db.sequelize.models.image,
                        as: "images",
                    },
                ],
            },
        );
    }
};
