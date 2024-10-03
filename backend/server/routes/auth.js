import express from "express";
import {
    test,
    verify,
    login,
    logout,
    signup,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/test", test);
router.post("/token/verify", verify);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;
