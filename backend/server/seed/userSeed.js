import bcryptjs from "bcryptjs";

// Declare sample users
const users = [
    {
        username: "test@test.com",
        password: "test",
        roleId: 1,
        // Nested objects related to user from userProfile model
        profile: {
            firstName: "Test",
            lastName: "Test",
            addressId: 1,
        },
    },
];

// Function to create users in the database with hashed passwords and associated profile
export const createUsers = async function createUsers(db) {
    // create temp data for testing, remove after testing is done
    for (const user of users) {
        // Hash password before creating user in db with bcryptjs
        const hashedPassword = bcryptjs.hashSync(
            user.password,
            bcryptjs.genSaltSync(10),
        );
        // Create user in db using await to wait for the user to be created
        await db.user
            // Create user in db
            .create({
                username: user.username.toLowerCase(),
                password: hashedPassword,
                roleID: user.roleId,
            })
            // Create profile in db associated with user after user is created
            .then(async (newUser) => {
                const profile = user.profile;
                await db.userProfile.create({
                    userId: newUser.userId,
                    addressId: 1,
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                });
            });
    }
};
