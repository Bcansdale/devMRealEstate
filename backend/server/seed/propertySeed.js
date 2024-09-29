import {properties} from "../data/properties.js";

export const createProperties = async function createProperties(db) {
    for (const property of properties) {
        const address = property.address;

        await db.address
            .create({
                addressLine1: address.addressLine1,
                addressLine2: address.addressLine1,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode,
            })
            .then((newAddress) => {
                db.property.create({
                    propertyId: property.propertyId,
                    addressId: newAddress.addressId,
                    propertyTypeId: property.propertyTypeId,
                    title: property.title,
                    description: property.description,
                    price: property.price,
                    numBedrooms: property.numBedrooms,
                    numBathrooms: property.numBathrooms,
                    squareFeet: property.squareFeet,
                    isAvailable: property.isAvailable,
                    userId: property.userId,
                })
                    .then((newProperty) => {
                        const photos = [];

                        property.photos.forEach((photo) => {
                            db.image
                                .create({
                                    imageURL: photo.src,
                                })
                                .then((newPhoto) => {
                                    db.propertyImage.create({
                                        propertyId: newProperty.propertyId,
                                        imageId: newPhoto.imageId,
                                        isPrimary: photo.isPrimary,
                                    });
                                    photos.push(newPhoto.imageId);
                                });
                        });
                    });
            });
    }
};
