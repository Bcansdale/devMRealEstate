import { db, User } from '../models/user.js'

console.log(await User.findAll())

await db.close()