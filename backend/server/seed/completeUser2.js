import bcryptjs from "bcryptjs";

// Function to create a single user with all related models
export const createCompleteUser2 = async (db) => {
    const transaction = await db.sequelize.transaction(); // Start transaction

    try {
        // Fetch existing Role by name (case-insensitive, e.g., "Admin", "admin", or "ADMIN")
        let role = await db.role.findOne({
            where: {
                roleName: {
                    [db.Sequelize.Op.iLike]: "Admin", // Case-insensitive match
                },
            },
            transaction,
        });

        // If the role is not found, create the role
        if (!role) {
            role = await db.role.create(
                {
                    roleName: "Admin", // Insert it with proper casing
                },
                { transaction }
            );
            console.log("Admin role created because it was not found.");
        } else {
            console.log("Admin role found.");
        }

        // Fetch existing Permission by name (case-insensitive)
        let permission = await db.permission.findOne({
            where: {
                permissionName: {
                    [db.Sequelize.Op.iLike]: "Test", // Case-insensitive match
                },
            },
            transaction,
        });

        // If the permission is not found, create the permission without specifying permissionId
        if (!permission) {
            permission = await db.permission.create(
                {
                    permissionName: "Test", // Insert it with proper casing
                    // No permissionId should be provided if permissionId is auto-incrementing
                },
                { transaction }
            );
            console.log("Test permission created because it was not found.");
        } else {
            console.log("Test permission found.");
        }

        // Associate Role and Permission through rolePermission if not already associated
        const existingRolePermission = await db.rolePermission.findOne({
            where: {
                roleId: role.roleId,
                permissionId: permission.permissionId,
            },
            transaction,
        });

        if (!existingRolePermission) {
            await db.rolePermission.create(
                {
                    roleId: role.roleId,
                    permissionId: permission.permissionId,
                },
                { transaction }
            );
            console.log("RolePermission association created.");
        } else {
            console.log("RolePermission association already exists.");
        }

        // Create Address (unique to the user)
        const address = await db.address.create(
            {
                addressLine1: "456 Maple St",
                addressLine2: "Apt 101",
                city: "Somewhere",
                state: "NY",
                postalCode: "10001",
            },
            { transaction }
        );

        // Hash password before creating the user
        const hashedPassword = bcryptjs.hashSync("securepassword", bcryptjs.genSaltSync(10));

        // Create User
        const user = await db.user.create(
            {
                username: "janedoe@example.com",
                password: hashedPassword,
                roleId: role.roleId, // Associate the role fetched or created above
            },
            { transaction }
        );

        // Create User Profile and link it to User
        await db.userProfile.create(
            {
                userId: user.userId,
                addressId: address.addressId, // Link the address created above
                firstName: "John",
                lastName: "Doe",
            },
            { transaction }
        );

        // Fetch existing Property Type (case-insensitive, e.g., "Apartment")
        let propertyType = await db.propertyType.findOne({
            where: {
                typeName: {
                    [db.Sequelize.Op.iLike]: "Condo", // Case-insensitive match
                },
            },
            transaction,
        });

        // If the property type is not found, create it
        if (!propertyType) {
            propertyType = await db.propertyType.create(
                {
                    typeName: "Condo", // Insert with proper casing
                },
                { transaction }
            );
            console.log("Condo property type created because it was not found.");
        } else {
            console.log("Condo property type found.");
        }

        // Create Property and link it to User and Address
        const property = await db.property.create(
            {
                addressId: address.addressId,
                propertyTypeId: propertyType.propertyTypeId, // Use the property type found or created
                title: "Luxury Apartment",
                description: "A luxurious apartment with a stunning view",
                price: 750000,
                numBedrooms: 3,
                numBathrooms: 2.5,
                squareFeet: 2500,
                isAvailable: true,
                userId: user.userId, // Owner of the property
            },
            { transaction }
        );

        // Create Image for the Property
        const image = await db.image.create(
            {
                imageURL: "https://example.com/image1.jpg",
            },
            { transaction }
        );

        // Associate Property and Image through PropertyImage
        await db.propertyImage.create(
            {
                propertyId: property.propertyId,
                imageId: image.imageId,
                isPrimary: true,
            },
            { transaction }
        );

        // Associate User and Property through UserSavedProperty (user saves property)
        await db.userSavedProperty.create(
            {
                userId: user.userId,
                propertyId: property.propertyId,
            },
            { transaction }
        );

        // Commit the transaction if everything goes well
        await transaction.commit();
        console.log(`User ${user.username} and all related data created successfully`);
    } catch (error) {
        // Rollback the transaction in case of any errors
        await transaction.rollback();
        console.error(`Error creating complete user:`, error);
    }
};