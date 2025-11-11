//* union |

type  UserRole = 'admin' | 'user' ;

const getDashboard = (role : UserRole )  => {
    if(role === 'admin') {
        return console.log('admin dashboard');
    }else if (role === 'user') {
        return console.log( 'user dashboard');
    }else{
        return 'guest dashboard'
    }
};

getDashboard('user')


// intersection &


type Employee = {
    id: string;
    name:string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
       id: '123',
       name: 'ChowdhuryShaheb',
       phoneNo:'76342',
       designation: 'Manager',
       teamSize:20
}

console.log(ChowdhuryShaheb);