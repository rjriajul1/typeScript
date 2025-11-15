//* access >> modify 


class BankAccount {
    readonly userId: number;
    public userName: string;
    private userBalance: number;
    // protected userBalance: number;
    constructor(userId:number, userName: string,userBalance: number ) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }

    addBalance (balance: number) {
        this.userBalance = this.userBalance + balance;
    }
}

// class StudentBankAccount extends BankAccount {
//     test(){
//         this.
//     }
// }

const RiajulBhaiAccount = new BankAccount(234,'Riajul', 30000)
RiajulBhaiAccount.addBalance(200)
RiajulBhaiAccount.addBalance(500)

console.log(RiajulBhaiAccount);