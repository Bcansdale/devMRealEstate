import {User} from "../models/user.js";
// import {UserProfile} from "../models/userProfile.js";
import bcryptjs from "bcryptjs";


// Test route
export const test = (req, res) => {
    res.send({
        message: "User controller works",
        success: true
    });
}

// Function to check if user is logged in
// export const sessionCheck = async (req, res) => {
//     if (req.session.user) {
//         res.send({
//             message: "User is logged in",
//             success: true,
//             user: req.session.user
//         });
//         return;
//
//     } else if (req.session.admin) {
//         res.send({
//             message: "Admin is logged in",
//             success: true,
//             admin: req.session.admin
//         });
//         return;
//
//     } else {
//         res.send({
//             message: "User is not logged in",
//             success: false
//         });
//         return;
//     }
// }