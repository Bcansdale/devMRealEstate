import { db, User } from '../models/userModel.js'
import bcryptjs from 'bcryptjs'

await db.sync({force: true })

let users = ['test@test.com', 'test2@test.com', 'test3@test.com']

const hashedPassword = bcryptjs.hashSync("test", bcryptjs.genSaltSync(10))

for (const user of users) {
    await User.create({
        username: user.toLowerCase(),
        password: hashedPassword,
        roleID: 1,
    })
}

await db.close()