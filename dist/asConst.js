"use strict";
//* as const assertion
Object.defineProperty(exports, "__esModule", { value: true });
// enum UserRoles {
//    Admin = 'Admin',
//    Editor = 'Editor',
//    Viewer = 'Viewer'
// }
const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
};
/*
{
   readonly Admin: "Admin",
   readonly Editor: "Editor",
   readonly Viewer: "Viewer"

   1. typeof perator
   2. keyof opeartor
   
   const user = {
   id: 222,
   name: 'Riajul'
   }
   typeof user;

   behind seen
   type user {
   id: number,
   name: string
   }

   typeof UserRoles

   {
   Admin: 'Admin;
   Editor: 'Editor';
   Viewer: 'Viewer'
   }

   keyof typeof UserRoles
   'Admin' | 'Editor' | 'Viewer'
}
*/
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
//# sourceMappingURL=asConst.js.map