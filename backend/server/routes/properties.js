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
router.get("/get", verifyAdmin, getAllProperties);
router.get("/get/:id", verifyAdmin, getProperty);
router.post("/create", verifyAdmin, createProperty);
router.delete("/delete/:id", verifyAdmin, deleteProperty);
router.put("/update/:id", verifyAdmin, updateProperty);




export default router