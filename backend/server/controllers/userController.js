import {User} from "../models/user.js";
// import {UserProfile} from "../models/userProfile.js";


// Test route
export const test = (req, res) => {
    res.send({
        message: "User controller works",
        success: true
    });
}

