"use strict";
//* union |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return console.log('admin dashboard');
    }
    else if (role === 'user') {
        return console.log('user dashboard');
    }
    else {
        return 'guest dashboard';
    }
};
getDashboard('user');
const ChowdhuryShaheb = {
    id: '123',
    name: 'ChowdhuryShaheb',
    phoneNo: '76342',
    designation: 'Manager',
    teamSize: 20
};
console.log(ChowdhuryShaheb);
//# sourceMappingURL=unionAndIntersection.js.map