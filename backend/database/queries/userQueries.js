import { db, User } from '../models/userModel.js'

console.log(await User.findAll())

await db.close()