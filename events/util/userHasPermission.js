/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > util > userHasPermission.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import permissionLevels from "../../config/permission_config.js";

//----------------------
//  exports
//----------------------
export function userHasPermission(user, command) {
    const userRoles = user.roles.cache.map(role => role.id);

    const accessLevel = command.accessLevel || 7;

    if (typeof accessLevel !== 'number') {
        console.error(`Invalid access level type for command '${command.name}': ${accessLevel}`);
        return false;
    }

    const commandPermission = permissionLevels.permissionLevels[accessLevel];
    if (!commandPermission) {
        console.error(`No permission level defined for command at index: ${accessLevel}`);
        return false;
    }

    const userLevel = permissionLevels.permissionLevels.reduce((acc, level, index) => {
        if (level && (level.user_ids.includes(user.id) || level.role_ids.some(roleId => userRoles.includes(roleId)))) {
            return (acc === null || index < acc.index) ? { level, index } : acc;
        }
        return acc;
    }, null);

    if (!userLevel) {
        return false;
    }

    return userLevel.level.level <= accessLevel;
}
