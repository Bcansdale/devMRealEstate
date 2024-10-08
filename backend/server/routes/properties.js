import express from "express";
import {
  test,
  createProperty,
  deleteProperty,
  updateProperty,
  getProperty,
  getAllProperties,
} from "../controllers/propertiesController.js";
// import {verifyAdmin} from "../controllers/userController.js";

const router = express.Router();

router.get("/test", test);
router.get("/get", getAllProperties);
router.get("/:propertyId", getProperty);
router.post("/create", createProperty);
router.delete("/:propertyId", deleteProperty);
router.put("/:propertyId", updateProperty);

export default router;
