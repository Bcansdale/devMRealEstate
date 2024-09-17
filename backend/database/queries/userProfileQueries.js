import {db, UserProfile} from '../models/userProfile.js';

console.log(await UserProfile.findAll())

await db.close()