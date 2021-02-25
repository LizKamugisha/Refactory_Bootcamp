/*
PROXY DESIGN PATTERN
--------------------------
 Step 1. Create interface to be implemented by both the Proxy and the RealSubject
 Step 2: Create the RealSubject and implement the interface
 Step 3: Create the Proxy to implement the Interface & maintains a reference to an object of the RealSubject class.
 Step 4: Create method that decides whether the client gets a proxy or a real service
*/
;
//Step 2
var RealBank = /** @class */ (function () {
    function RealBank() {
    }
    RealBank.prototype.withdrawMoney = function (clientName) {
        console.log(clientName + ' is withdrawing from ATM');
    };
    return RealBank;
}());
;
// Step 3
var ATM = /** @class */ (function () {
    function ATM() {
        this.pin = "momo";
    }
    ATM.prototype.withdrawMoney = function (clientName, pin) {
        var realBank = new RealBank();
        var pinCheck = this.checkAccess(pin);
        if (pinCheck) {
            console.log('Access granted to withdraw money');
            realBank.withdrawMoney(clientName);
        }
        else {
            console.log('please enter the correct pin');
        }
    };
    // Step 4
    ATM.prototype.checkAccess = function (pin) {
        if (this.pin === pin) {
            return true;
        }
        else {
            return false;
        }
    };
    return ATM;
}());
// Instantiating & Initialization 
var tomMasterCard = new ATM();
tomMasterCard.withdrawMoney('tom', 'momo');
