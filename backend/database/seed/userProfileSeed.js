import { db, UserProfile } from '../models/userProfile.js'

await db.sync({force: true })

let userProfiles = [
    {
        userId: 1,
        addressId: 1,
        firstName: 'Test',
        lastName: 'Test',
    },
    {
        userId: 2,
        addressId: 2,
        firstName: 'Test2',
        lastName: 'Test2',
    },
    {
        userId: 3,
        addressId: 3,
        firstName: 'Test3',
        lastName: 'Test3',
    },
]

for (const userProfile of userProfiles) {
    await UserProfile.create(userProfile)
}

await db.close()