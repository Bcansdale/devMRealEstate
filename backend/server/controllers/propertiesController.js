// import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Photo path
const photoPath = path.join(__dirname, "../../../public/photos");
if (!fs.existsSync(photoPath)) {
  fs.mkdirSync(photoPath, { recursive: true });
}

// Test route
export const test = (req, res) => {
  res.send({
    message: "Property controller works",
    success: true,
  });
};

// Function to create property
export const createProperty = async (req, res) => {
  const db = req.app.get("db");


  let photos = [];
  if (req.files) {
    let reqPhotos = req.files.photos;

    if (!(reqPhotos instanceof Array)) {
      reqPhotos = [reqPhotos];
    }

    reqPhotos.forEach((file, index) => {
      fs.writeFile(photoPath + "/" + file.name, file.data, () => {});

      photos.push({
        src: `http://localhost:5539/photos/${file.name}`,
        propertyImage: {
          isPrimary: index === 0,
        },
      });
    });
  }

  const {
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    propertyTypeId,
    addressLine1: title,
    description,
    price,
    numBedrooms,
    numBathrooms,
    squareFeet,
    isAvailable = 1,
  } = req.body;

  const property = await db.property.create(
      {
        propertyTypeId: propertyTypeId,
        title: title,
        description: description,
        price: price,
        numBedrooms: numBedrooms,
        numBathrooms: numBathrooms,
        squareFeet: squareFeet,
        isAvailable: isAvailable,
        userId: req.user ? req.user.id : null,
        address: {
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          state: state,
          postalCode: postalCode,
        },
        images: photos,
      },
      {
        include: [
          {
            model: db.sequelize.models.address,
            as: "address",
          },
          {
            model: db.sequelize.models.image,
            as: "images",
          },
        ],
      },
  );

  if (!property) {
    res.status(500).send({
      message: "Property not created",
      success: false,
    });
    return;
  }

  res.status(200).send({
    message: "Property created",
    success: true,
    property: property,
  });
};

// Function to delete property
export const deleteProperty = async (req, res) => {
  const db = req.app.get("db");

  const propertyId = req.params.propertyId;
  if (!propertyId) {
    return res.status(400).send({ message: "Property ID is required" });
  }

  const property = await db.property.findOne({
    include: [
      { model: db.address },
      { model: db.image, through: db.propertyImage },
    ],
    where: {
      propertyId: propertyId, // Use propertyId instead of id
    },
  });

  if (!property) {
    res.status(404).send({
      message: "Property not found",
      success: false,
    });
    return;
  }

  await property.destroy();

  res.status(200).send({
    message: "Property deleted",
    success: true,
  });
};

// Function to update property
export const updateProperty = async (req, res) => {
  const db = req.app.get("db");

  const propertyId = req.params.propertyId;
  if (!propertyId) {
    return res.status(400).send({ message: "Property ID is required" });
  }

  const property = await db.property.findOne({
    include: [
      { model: db.address },
      { model: db.image, through: db.propertyImage },
    ],
    where: {
      propertyId: propertyId, // Use propertyId instead of id
    },
  });

  if (!property) {
    res.status(404).send({
      message: "Property not found",
      success: false,
    });
    return;
  }

  console.log(res.body);

  const {
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    propertyTypeId,
    addressLine1: title,
    description,
    price,
    numBedrooms,
    numBathrooms,
    squareFeet,
    isAvailable = 1,
  } = req.body;

  const updatedProperty = await property.update(
      {
        propertyTypeId: propertyTypeId,
        title: title,
        description: description,
        price: price,
        numBedrooms: numBedrooms,
        numBathrooms: numBathrooms,
        squareFeet: squareFeet,
        isAvailable: isAvailable,
        userId: req.user ? req.user.id : null,
        address: {
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          state: state,
          postalCode: postalCode,
        },
        // images: photos,
      },
      {
        include: [
          {
            model: db.sequelize.models.address,
            as: "address",
          },
          // {
          //   model: db.sequelize.models.image,
          //   as: "images",
          // },
        ],
      },
  );

  res.status(200).send({
    message: "Property updated",
    success: true,
    property: updatedProperty,
  });
};

// Function to get property
export const getProperty = async (req, res) => {
  const db = req.app.get("db");

  const propertyId = req.params.propertyId;
  if (!propertyId) {
    return res.status(400).send({ message: "Property ID is required" });
  }

  const property = await db.property.findOne({
    include: [
      { model: db.address },
      { model: db.image, through: db.propertyImage },
      { model: db.propertyType },
    ],
    where: {
      propertyId: propertyId, // Use propertyId instead of id
    },
  });

  if (!property) {
    res.status(404).send({
      message: "Property not found",
      success: false,
    });
    return;
  }

  res.status(200).send({
    message: "Property found",
    success: true,
    property: property,
  });
};

export const getAllProperties = async (req, res) => {
  const db = req.app.get("db");

  const properties = await db.property.findAll({
    include: [
      { model: db.address },
      { model: db.image, through: db.propertyImage },
    ],
    order: [["propertyId", "DESC"]],
  });

  res.status(200).send({
    success: true,
    properties: properties,
  });
};
