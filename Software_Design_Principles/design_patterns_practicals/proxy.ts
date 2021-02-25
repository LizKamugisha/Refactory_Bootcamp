/*
PROXY DESIGN PATTERN
--------------------------
 Step 1. Create interface to be implemented by both the Proxy and the RealSubject
 Step 2: Create the RealSubject and implement the interface
 Step 3: Create the Proxy to implement the Interface & maintains a reference to an object of the RealSubject class.
 Step 4: Create method that decides whether the client gets a proxy or a real service
*/

// Step 1
interface Bank {
    withdrawMoney(clientName: string, pin: string)
};

//Step 2
class RealBank implements Bank {
    withdrawMoney(clientName: string) {
        console.log(clientName + ' has withdrawn money')
    }
};

// Step 3
class ATM implements Bank {
    // Reference to the Real Subject
    realBank: RealBank;
    pin = "momo"
    withdrawMoney(clientName: string, pin: string) {
        let realBank = new RealBank();
        let pinCheck = this.checkAccess(pin)
        if (pinCheck) {
            console.log('Access granted to withdraw money from ATM')
            realBank.withdrawMoney(clientName)
        } else {
            console.log('please enter the correct pin')
        }
    }
    // Step 4
    private checkAccess(pin) {
        if (this.pin === pin) {
            return true;
        } else {
            return false;
        }
    }
}

// Instantiating & Initialization 
let tomMasterCard = new ATM()
tomMasterCard.withdrawMoney('tom', 'momo')


