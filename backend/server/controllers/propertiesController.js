// Test route
export const test = (req, res) => {
    res.send({
        message: "Property controller works",
        success: true
    });
}

// Function to create property
export const createProperty = async (req, res) => {
    const db = req.app.get("db");

    const { addressId, propertyTypeId, title, description, price, numBedrooms, numBathrooms, squareFeet, isAvailable } = req.body;

    const property = await db.property.create({
        addressId: addressId,
        propertyTypeId: propertyTypeId,
        title: title,
        description: description,
        price: price,
        numBedrooms: numBedrooms,
        numBathrooms: numBathrooms,
        squareFeet: squareFeet,
        isAvailable: isAvailable,
    });

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

    const property = await db.property.findOne({
        where: {
            id: req.params.id,
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

    const property = await db.property.findOne({
        where: {
            id: req.params.id,
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

    const property = await db.property.findOne({
        where: {
            id: req.params.id,
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

    const listings = await db.property.findAll();

    res.status(200).send(listings);
};