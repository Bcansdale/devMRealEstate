//

const roles = [
    {
        roleId: 1,
        roleName: "admin",
        rolePermission: {
            roleId: 1,
            permissionId: "read",
        }
    },
    {
        roleId: 2,
        roleName: "user",
        rolePermission: {
            roleId: 2,
            permissionId: "create",
        }
    },
];

export const createRoles = async function createRoles(db) {
    for (const role of roles) {
        await db.role
            .create({
                roleId: role.roleId,
                roleName: role.name,
            })
            .then(async (newRole) => {
                const permission = role.permission;
                await db.userProfile.create({
                    roleId: newRole.roleId,
                    permissionId: permission.permissionId
                })
            }
        )
    }
}