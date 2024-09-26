import express from "express";
import {
    test,
    sessionCheck,
    login,
    logout,
    signup,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/test", test);
router.get("/session-check", sessionCheck);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);




export default router;