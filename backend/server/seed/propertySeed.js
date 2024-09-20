const properties = [
    {
        // propertyId: 1,
        // addressId: 1,
        propertyTypeId: 2,
        title: "Salt Lake Town Home",
        description: "Lorem ipsum",
        price: 600000.00,
        numBedrooms: 2,
        numBathrooms: 2.5,
        squareFeet: 1500,
        isAvailable: true,
        userId: 2,
    },
]

export const createProperties = async function createProperties(db) {
    for (const property of properties) {
        await db.property
            .create({
                propertyId: property.propertyId,
                addressId: property.addressId,
                propertyTypeId: property.propertyTypeId,
                title: property.title,
                description: property.description,
                price: property.price,
                numBedrooms: property.numBedrooms,
                numBathrooms: property.numBathrooms,
                squareFeet: property.squareFeet,
                isAvailable: property.isAvailable,
                userId: property.userId,
            }
        )
    }
}