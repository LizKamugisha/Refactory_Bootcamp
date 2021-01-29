/*
Example of Dependency Inversion Principle (DIP)

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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create high level classes that depend on abstraction
var ATM = /** @class */ (function () {
    function ATM() {
    }
    ATM.prototype.setService = function (atmService) {
        this.atmService = atmService;
    };
    ATM.prototype.inputCard = function () {
        console.log("ATM Inserting card...");
    };
    ATM.prototype.validateCard = function (creditCard) {
        this.atmService.validate(creditCard);
    };
    ATM.prototype.getBalance = function (creditCard) {
        this.atmService.getBalance(creditCard);
        console.log("ATM displaying account balance");
    };
    ATM.prototype.processPayment = function () {
        console.log("ATM processing payment...");
    };
    ATM.prototype.debit = function (creditCard) {
        this.atmService.debit(creditCard);
        console.log("ATM debiting credit card...");
    };
    ATM.prototype.dispenseMoney = function () {
        console.log("ATM dispensing money...");
    };
    ATM.prototype.ejectCard = function () {
        console.log("ATM ejecting card...");
    };
    ATM.prototype.issueReceipt = function () {
        console.log("ATM printing receipt...");
    };
    return ATM;
}());
;
var CreditCard = /** @class */ (function () {
    function CreditCard() {
        this.name = "John Doe";
        this.ccv = "";
        this.exp = "04/21";
    }
    CreditCard.prototype.cardDetails = function (interswitchCard) {
        this.atmCompatibility = interswitchCard;
        console.log("Displaying " + this.name + " Card Details");
    };
    return CreditCard;
}());
;
// Create low level classes that depend on abstraction
var VisaCard = /** @class */ (function (_super) {
    __extends(VisaCard, _super);
    function VisaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // cardDetails(){}
    VisaCard.prototype.validate = function () { };
    VisaCard.prototype.getBalance = function () { };
    VisaCard.prototype.debit = function () { };
    return VisaCard;
}(CreditCard));
var MasterCard = /** @class */ (function (_super) {
    __extends(MasterCard, _super);
    function MasterCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MasterCard.prototype.validate = function () { };
    MasterCard.prototype.getBalance = function () { };
    MasterCard.prototype.debit = function () { };
    return MasterCard;
}(CreditCard));
var AmericanExpress = /** @class */ (function (_super) {
    __extends(AmericanExpress, _super);
    function AmericanExpress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmericanExpress.prototype.validate = function () { };
    AmericanExpress.prototype.getBalance = function () { };
    AmericanExpress.prototype.debit = function () { };
    return AmericanExpress;
}(CreditCard));
var Maesetro = /** @class */ (function (_super) {
    __extends(Maesetro, _super);
    function Maesetro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maesetro.prototype.validate = function () { };
    Maesetro.prototype.getBalance = function () { };
    Maesetro.prototype.debit = function () { };
    return Maesetro;
}(CreditCard));
var Citi = /** @class */ (function (_super) {
    __extends(Citi, _super);
    function Citi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Citi.prototype.validate = function () { };
    Citi.prototype.getBalance = function () { };
    Citi.prototype.debit = function () { };
    return Citi;
}(CreditCard));
// Instanciate 
var atm = new ATM();
var card = new CreditCard();
var card1 = new VisaCard();
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
