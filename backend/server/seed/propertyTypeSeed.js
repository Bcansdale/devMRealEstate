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

// console.log(propertyTypes)
export const createPropertyTypes = async function createPropertyTypes(db) {
    for (const type of propertyTypes) {
        await db.propertyType
            .create({
                propertyTypeId: type.propertyTypeId,
                typeName: type.typeName,
            }
        )
    }
}