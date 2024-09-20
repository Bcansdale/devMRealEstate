const addresses = [
    {
        addressId: 1,
        addressLine1: "351 W 800 N",
        addressLine2: "Unit 6",
        city: "Salt Lake City",
        state: "Utah",
        postalCode: 84103,
    },
];

export const createAddresses = async function createAddresses(db) {
    for (const address of addresses) {
        await db.permission
            .create({
                addressId: address.addressId,
                addressLine1: address.addressLine1,
                addressLine2: address.addressLine2,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode,
            })
    }
}