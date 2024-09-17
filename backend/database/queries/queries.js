import { db, User } from '../models/model.js'

console.log(await User.findAll())

await db.close()