import db from '../models/db.js';
const { user: User } = db;
const { userProfile: UserProfile } = db;


(async () => {
    try {
        const newUser = await User.create(
            {
                roleId: 2, // Replace with the actual role ID
                username: 'alice@example.com',
                password: 'hashed_password_here', // Replace with actual hashed password
                userProfile: {
                    firstName: 'Alice',
                    lastName: 'Smith',
                    addressId: 1, // Replace with actual address ID
                },
            },
            {
                include: [
                    {
                        model: db.userProfile,
                        as: 'userProfile',
                    },
                ],
            }
        );

        console.log('User and profile created successfully:', newUser.toJSON());
    } catch (error) {
        console.error('Error creating user and profile:', error);
    } finally {
        await db.sequelize.close();
    }
})();