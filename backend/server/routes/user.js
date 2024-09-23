import express from "express";
import { test } from "../controllers/userController.js";
// sessionCheck, updateUser, deleteUser, getUser, getUserListing


const router = express.Router();
router.get("/test", test)
// router.get("/session", sessionCheck);
// router.put("/update/:id", updateUser);
// router.delete("/delete/:id", deleteUser);
// router.get("/:id", getUser);
// router.get("/properties/:id", getUserListing);
export default router