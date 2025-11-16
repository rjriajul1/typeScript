"use strict";
//* encapsulation
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    userBalance;
    // protected userBalance: number;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance) {
        this.userBalance = this.userBalance + balance;
    }
    callHiddenMethod(balance) {
        this.addBalance(balance);
    }
}
// class StudentBankAccount extends BankAccount {
//     test(){
//         this.
//     }
// }
const RiajulBhaiAccount = new BankAccount(234, 'Riajul', 30000);
RiajulBhaiAccount.callHiddenMethod(200);
// RiajulBhaiAccount.addBalance(500)
console.log(RiajulBhaiAccount);
//# sourceMappingURL=encapsulation.js.map