//* getter and setter

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

    // addBalance (balance: number) {
    //     this.userBalance = this.userBalance + balance;
    // }

    //* setter use kora korta chai 
       set addBalance (amount: number) {
           this.userBalance = this.userBalance + amount
       }

  //* getter use  korbo get korta chai 
  get getBalance () {
   return this.userBalance
  }
 

    // get korbo 
    // getBalance() {
    //     return this.userBalance;
    // }
}

const RiajulBhaiAccount = new BankAccount(234,'Riajul', 30000)
// RiajulBhaiAccount.addBalance(200) // funcation call korta hossa 
// RiajulBhaiAccount.addBalance(600)

// console.log(RiajulBhaiAccount.getBalance()); // function call korta hossa 

RiajulBhaiAccount.addBalance = 100
RiajulBhaiAccount.addBalance = 200
console.log(RiajulBhaiAccount);
console.log(RiajulBhaiAccount.getBalance);