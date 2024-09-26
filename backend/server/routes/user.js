import express from "express";
import {isUserAdmin, test, verifyAdmin, getAdminProperty} from "../controllers/userController.js";


// updateUser, deleteUser, getUser, getUserListing
const router = express.Router();
router.get("/test", test)
// router.put("/update/:id", updateUser);
// router.delete("/delete/:id", deleteUser);
// router.get("/:id", getUser);
// router.get("/properties/:id", getUserProperty);
router.get('/admin', isUserAdmin);
router.get('/admin/:id', verifyAdmin);
router.get('/admin/get', getAdminProperty);


export default router