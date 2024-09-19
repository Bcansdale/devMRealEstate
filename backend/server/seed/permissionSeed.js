//
const permissions = [
    {
        permissionId: 1,
        permissionName: "read",
    },
    {
        permissionId: 2,
        permissionName: "create",
    }
];

export const createPermissions = async function createPermissions(db) {
    for (const permission of permissions) {
        await db.permission
            .create({
                permissionId: permission.permissionId,
                permissionName: permission.permissionName
            }
        )
    }
}