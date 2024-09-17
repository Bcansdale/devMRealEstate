import { db, User } from '../models/userProfile.js'

console.log(await User.findAll())

await db.close()