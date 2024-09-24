import { PropertyImage } from "../models/propertyImage.js";

const properties = [
    {
        propertyTypeId: 2,
        userId: 2,
        title: "Salt Lake Town Home",
        description: "Lorem ipsum",
        price: 600000.0,
        numBedrooms: 2,
        numBathrooms: 2.5,
        squareFeet: 1500,
        isAvailable: true,
        address: {
            addressLine1: "351 W 800 N",
            addressLine2: "Unit 6",
            city: "Salt Lake City",
            state: "Utah",
            postalCode: 84103,
        },
        photos: [
            {
                src: "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
                isPrimary: true,
            },
        ],
    },
];

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
                });
            })
            .then((newProperty) => {
                // const photos = [];

                property.photos.forEach((photo) => {
                    // newProperty.addImages(photo);
                    // db.image
                    //   .create({
                    //     imageURL: photo.src,
                    //   })
                    //   .then((newPhoto) => {
                    //     photos.push(newPhoto.imageId);
                    //   });
                });
            });
    }
};
