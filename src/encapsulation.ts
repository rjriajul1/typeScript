//* encapsulation

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

   private addBalance (balance: number) {
        this.userBalance = this.userBalance + balance;
    }
  
    callHiddenMethod (balance: number){
          this.addBalance(balance)
    }

}

// class StudentBankAccount extends BankAccount {
//     test(){
//         this.
//     }
// }

const RiajulBhaiAccount = new BankAccount(234,'Riajul', 30000)
RiajulBhaiAccount.callHiddenMethod(200)
// RiajulBhaiAccount.addBalance(500)

console.log(RiajulBhaiAccount);