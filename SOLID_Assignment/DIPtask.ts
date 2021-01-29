/*
Example of Dependency Inversion Principle (DIP)
------------------------------------------------
- Interswitch ATM Machine (High Level Module)
    - inputCard()
    - validateCard()
    - processPayment()
    - ejectCard()
    - dispenseMoney()
    - issueReceipt()

- VisaCard (Low Level Module)
- MasterCard (Low Level Module)
- AmericanExpress (Low Level Module)
- Maesetro (Low Level Module)
- citi (Low Level Module)

CreditCard
    details = {cvv:"", exp:"04/21", name:"john Doe"}
    validate();
    getBalance();
    debit()
*/

// Introduce an abstraction between classes
interface Interswitch{
    validate(creditCard:object);
    getBalance(creditCard:object);
    debit(creditCard:object);
};

// Create high level classes that depend on abstraction
class ATM {
    atmService: Interswitch;
    setService(atmService:Interswitch){
        this.atmService = atmService;
    }
    inputCard(){
        console.log("ATM Inserting card...");
    }
    validateCard(creditCard:object){
        this.atmService.validate(creditCard)
    }
    getBalance(creditCard:object){
        this.atmService.getBalance(creditCard)
        console.log("ATM displaying account balance...");
    }
    processPayment(){
        console.log("ATM processing payment...");
    }
    debit(creditCard:object){
        this.atmService.debit(creditCard)
        console.log("ATM debiting credit card...");
    }
    dispenseMoney(){
        console.log("ATM dispensing money...");
    }
    ejectCard(){
        console.log("ATM ejecting card...");
    }
    issueReceipt(){
        console.log("ATM printing receipt...");
    }
};

class CreditCard {
    name = "John Doe"
    private ccv = ""
    private exp = "04/21"

    atmCompatibility: Interswitch;
    cardDetails(interswitchCard:Interswitch){
        this.atmCompatibility = interswitchCard;
        console.log("Displaying "+ this.name +" Card Details");
    }
};

// Create low level classes that depend on abstraction
class VisaCard extends CreditCard implements Interswitch{
    validate(){}
    getBalance(){}
    debit(){}
};
class MasterCard extends CreditCard implements Interswitch{
    validate(){}
    getBalance(){}
    debit(){}
};
class AmericanExpress extends CreditCard implements Interswitch{
    validate(){}
    getBalance(){}
    debit(){}
};
class Maesetro extends CreditCard implements Interswitch{
    validate(){}
    getBalance(){}
    debit(){}
};
class Citi extends CreditCard implements Interswitch{
    validate(){}
    getBalance(){}
    debit(){}
};

// Instanciate 
let atm = new ATM()
let card = new CreditCard()

let card1 = new VisaCard()
atm.setService(card1);
atm.inputCard();

card.cardDetails(card1);

atm.validateCard(card1);
atm.getBalance(card1);
atm.processPayment();
atm.debit(card1);
atm.dispenseMoney();
atm.ejectCard();
atm.issueReceipt();