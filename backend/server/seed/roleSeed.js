//
const roles = [
    {
        roleId: 1,
        roleName: "admin",
        rolePermission: {
            roleId: 1,
            permissionId: 1,
        }
    },
    {
        roleId: 2,
        roleName: "user",
        rolePermission: {
            roleId: 2,
            permissionId: 2,
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
                const permission = role.rolePermission;
                await db.rolePermission.create({
                    roleId: newRole.roleId,
                    permissionId: permission.permissionId
                })
            }
        )
    }
}