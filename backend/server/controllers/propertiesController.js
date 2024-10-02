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
            // userId: req.user ? req.user.id : null,
            address: {
                addressLine1: req.body.address.addressLine1,
                addressLine2: req.body.address.addressLine2,
                city: req.body.address.city,
                state: req.body.address.state,
                postalCode: req.body.address.postalCode,
            },
            image: {
                src: req.body.image.src,
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
    // This is causing a bug, wont verify admin
    // if (!req.user) {
    //     res.status(401).send({ message: 'Unauthorized' });
    //     return;
    // }

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

    const updatedProperty = await property.update(req.body);

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
