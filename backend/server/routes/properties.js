import express from "express";
import { test, } from '../controllers/propertiesController.js'
// createListing, deleteListing, updateListing, getListing, getListings


const router = express.Router();
router.get("/test", test)
// router.post("/create", createListing);
// router.delete("/delete/:id", deleteListing);
// router.put("/update/:id", updateListing);
// router.get("/get/:id", getListing);
// router.get("/get", getListings);



export default router