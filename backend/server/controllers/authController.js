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

    const { username, password } = req.body;

    if (await db.user.findOne({ where: { username: username } })) {
        res.send({
            message: "username already exists",
            success: false,
        });
        return;
    }

    const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

    const user = await User.create({
        firstname: "",
        lastname: "",
        username: username,
        password: hashedPassword,
    });

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

    // grab values of 'username'/'password' from body object
    const { username, password } = req.body;

    // see if a user exists in the db with
    // the provided username
    const user = await db.user.findOne({
        where: {
            username: username,
        },
    });

    // if we're here, then the user was found
    // now evaluate if the passwords match
    if (!user || !bcryptjs.compareSync(password, user.password)) {
        res.send({
            message: "Invalid login, please try again.",
            success: false,
        });
        return;
    }
    // if we're here, then the user exists
    // AND their password was correct!
    // So I want to "save" their userId to a cookie --> req.session
    req.session.userId = user.userId;
    // req.session is a cookie saved on the user's browser.
    // so each user that visits our site sends their custom "req" object to us, and therefore, as far as their browser knows, they are "logged in"

    // if we're here, then all is a success
    // send a response including the userId:

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
