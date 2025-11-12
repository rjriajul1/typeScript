"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// set of fixed string leteral ek jaigai rakhe
// type UserRole = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditorPermissable = canEdit(UserRoles.Admin);
console.log(isEditorPermissable);
//# sourceMappingURL=enum.js.map