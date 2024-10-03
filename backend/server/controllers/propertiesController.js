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

    const {
        addressId,
        propertyTypeId,
        title,
        description,
        price,
        numBedrooms,
        numBathrooms,
        squareFeet,
        isAvailable,
    } = req.body;

    const property = await db.property.create(
        {
            addressId: addressId,
            propertyTypeId: propertyTypeId,
            title: title,
            description: description,
            price: price,
            numBedrooms: numBedrooms,
            numBathrooms: numBathrooms,
            squareFeet: squareFeet,
            isAvailable: isAvailable,
            userId: 2,

            address: {
                addressLine1: req.body.address.addressLine1,
                addressLine2: req.body.address.addressLine2,
                city: req.body.address.city,
                state: req.body.address.state,
                postalCode: req.body.address.postalCode,
            },
            image: {
                src: req.file ? req.file.path : null,
            },
        },
        {
            include: [
                { model: db.address },
                { model: db.image, through: db.propertyImage },
            ],
            where: {
                id: req.params.propertyId,
            },
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
            propertyId: propertyId,
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
        return res.status(404).send({
            message: "Property not found",
            success: false,
        });
    }

    // Update the property fields with req.body data
    const updatedData = {
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        price: req.body.price,
        numBedrooms: req.body.numBedrooms,
        numBathrooms: req.body.numBathrooms,
        squareFeet: req.body.squareFeet,
        propertyTypeId: req.body.propertyTypeId,
        description: req.body.description,
    };

    // If there's a file, update the image
    if (req.file) {
        const imagePath = `/images/${req.file.filename}`;
        updatedData.image = imagePath; // Assuming you store image as a path
    }

    const updatedProperty = await property.update(updatedData);

    return res.status(200).send({
        message: "Property updated successfully",
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
    });

    res.status(200).send(properties);
};
