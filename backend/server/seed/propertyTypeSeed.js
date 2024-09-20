const propertyTypes = [
    {
        propertyTypeId: 1,
        typeName: "House",
    },
    {
        propertyTypeId: 2,
        typeName: "Town Home",
    },
    {
        propertyTypeId: 3,
        typeName: "Multi-Family",
    },
]

export const createPropertyTypes = async function createPropertyTypes(db) {
    for (const propertyType of propertyTypes) {
        await db.propertyTypeId
            .create({
                propertyTypeId: propertyType.propertyTypeId,
                typeName: propertyType.typeName,
            }
        )
    }
}