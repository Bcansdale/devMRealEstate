import { User } from "../models/user.js";
import bcryptjs from "bcryptjs";

// Test Route
export const test = (req, res) => {
    res.send({
        message: "Auth controller works",
        success: true,
    });
};

// Function to signup user
export const signup = async (req, res) => {
    const db = req.app.get("db");

    const { firstname, lastname, username, password } = req.body;

    if (await db.user.findOne({ where: { username: username } })) {
        res.send({
            message: "username already exists",
            success: false,
        });
        return;
    }

    const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

    const user = await db.user.create({
        // firstname: firstname,
        // lastname: lastname,
        username: username,
        password: hashedPassword,
        userProfile: {
            firstName: firstname,
            lastName: lastname,
        }
    }, {
        include: ["userProfile"],
    }
    );

    if (!user) {
        res.send({
            message: "user does not exist",
            success: false,
        });
        return;
    }
    req.session.userId = user.userId;

    res.send({
        message: "user created",
        success: true,
        userId: user.userId,
    });
};

// Function to login user
export const login = async (req, res) => {
    const db = req.app.get("db");

    const { username, password } = req.body;

    const user = await db.user.findOne({
        where: {
            username: username,
        },
    });

    if (!user || !bcryptjs.compareSync(password, user.password)) {
        res.send({
            message: "Invalid login, please try again.",
            success: false,
        });
        return;
    }
    req.session.userId = user.userId;

    res.send({
        message: "user logged in",
        success: true,
        userId: req.session.userId,
    });
};

export const logout = async (req, res) => {
    req.session.destroy();

    res.send({
        message: "user logged out",
        success: true,
    });
};

export const sessionCheck = async (req, res) => {
    if (req.session.userId) {
        res.send({
            message: "user logged in",
            success: true,
            userId: req.session.userId,
        });
    } else {
        res.send({
            message: "user logged out",
            success: false,
        });
    }
};
