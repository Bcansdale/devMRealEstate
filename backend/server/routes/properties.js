import express from "express";
import {
    test,
    createProperty,
    deleteProperty,
    updateProperty,
    getProperty,
    getAllProperties,
} from '../controllers/propertiesController.js';
import multer from 'multer';



const router = express.Router();

import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = 'images/';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});

router.get("/test", test)
router.get("/get",  getAllProperties);
router.get("/:propertyId", getProperty);
router.post("/create", upload.single('image'), createProperty);
router.delete("/:propertyId", deleteProperty);
router.put("/:propertyId", updateProperty);




export default router