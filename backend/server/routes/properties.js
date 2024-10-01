import express from "express";
import {
    test,
    createProperty,
    deleteProperty,
    updateProperty,
    getProperty,
    getAllProperties,
} from '../controllers/propertiesController.js';
import {verifyAdmin} from "../controllers/userController.js";


const router = express.Router();

router.get("/test", test)
router.get("/get",  getAllProperties);
router.get("/get/:id", getProperty);
router.post("/create", verifyAdmin, createProperty);
router.delete("/delete/:id", deleteProperty);
router.put("/update/:id", updateProperty);




export default router