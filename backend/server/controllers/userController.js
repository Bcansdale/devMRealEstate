// Test route
export const test = (req, res) => {
    res.send({
        message: "User controller works",
        success: true,
    });
};

// // Saving for later feature
// export const getUserProperty = async (req, res) => {
//     const db = req.app.get("db");
//
//     if (req.user.id === req.params.id) {
//         const listings = await db.property.findAll({
//             where: {
//                 userRef: req.params.id,
//             },
//         });
//         res.status(200).json(listings);
//     } else {
//         res.send({
//             message: "You can only view your own listings!",
//             success: false,
//         });
//     }
// };
