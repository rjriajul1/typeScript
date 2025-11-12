// enum
// set of fixed string leteral ek jaigai rakhe

// type UserRole = "Admin" | "Editor" | "Viewer";
enum UserRoles {
   Admin = 'Admin',
   Editor = 'Editor',
   Viewer = 'Viewer'
}

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true
    }else {
        return false
    }
}

const isEditorPermissable = canEdit(UserRoles.Admin)
console.log(isEditorPermissable);