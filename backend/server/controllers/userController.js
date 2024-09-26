
// Test route
export const test = (req, res) => {
    res.send({
        message: "User controller works",
        success: true
    });
}

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

export const isUserAdmin = async (req,user) => {
    const db = req.app.get("db");

    if (user) {
        const userRole = await db.role.findOne({
            where: {
                roleId: user.roleId,
            },
        });

        return userRole && userRole.roleName === "admin";
    } else {
        return false;
    }
};

export const verifyAdmin = async (req, res, next) => {
    if (await isUserAdmin(req.user)) {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
};
