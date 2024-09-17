import { db, User } from '../models/model.js'
import bcryptjs from 'bcryptjs'

await db.sync({force: true })

let users = ['test@test.com', 'test2@test.com']

const hashedPassword = bcryptjs.hashSync("test", bcryptjs.genSaltSync(10))

for (const user of users) {
    await User.create({
        username: user.toLowerCase(),
        password: hashedPassword,
        roleID: 1,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    })
}

await db.close()