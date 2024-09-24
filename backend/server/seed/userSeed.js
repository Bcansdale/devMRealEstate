import bcryptjs from "bcryptjs";

const users = [
    {
        username: "test@test.com",
        password: "test",
        roleId: 1,
        userProfile: {
            firstName: "Test",
            lastName: "Test",
            address: {
                addressLine1: "145 North St",
                addressLine2: null,
                city: "North Naples",
                state: "FL",
                postalCode: "34104",
            },
        },
    },
    {
        username: "admin@admin.com",
        password: "admin",
        roleId: 2,
        userProfile: {
            firstName: "Admin",
            lastName: "Admin",
            address: {
                addressLine1: "123 Main St",
                addressLine2: null,
                city: "Naples",
                state: "FL",
                postalCode: "34104",
            },
            savedProperties: [],
        },
    },
];

export const createUsers = async function createUsers(db) {
    for (const user of users) {
        const hashedPassword = bcryptjs.hashSync(
            user.password,
            bcryptjs.genSaltSync(10),
        );

        await db.user
            .create({
                username: user.username.toLowerCase(),
                password: hashedPassword,
                roleId: user.roleId,
            })
            .then(async (newUser) => {
                const profile = user.userProfile;
                const address = profile.address;

                const newAddress = await db.address.create({
                    addressLine1: address.addressLine1,
                    addressLine2: address.addressLine1,
                    city: address.city,
                    state: address.state,
                    postalCode: address.postalCode,
                });
                await db.userProfile.create({
                    userId: newUser.userId,
                    addressId: newAddress.addressId,
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                });
            });
    }
};
