/*
    ENCAPSULATION
    -------------
    Enclosing content in a certain structure such as;
    Object literal = {} Create an object directly
    Templates:
        Object Factory =  a function that return an object through literal
        Object Constructor = creates a template which the object will mimick
        Class = A template we use to  create objects
                A modification / advancement of a construtor
                cosist of  variables & Operations / Methods
    Access Control Modifiers = keywords e.g private, public, protected & package
 */
// Encapsulation
var User = /** @class */ (function () {
    function User() {
        // Variables
        this.username = "EK";
        this.password = "12345";
        this.fullName = "Elizabeth Kamugisha";
    }
    // Methods
    User.prototype.login = function (uname, pwd) {
        if (uname === this.username, pwd === this.password) {
            console.log("Login Succesful !");
        }
        else {
            console.log("Login Not Succesful !");
        }
    };
    User.prototype.changePwd = function (newPwd) {
        this.password = newPwd;
        console.log("Password Changed !");
    };
    return User;
}());
;
// Testing
var liz = new User();
liz.login("EK", "12345");
liz.changePwd("abc");
liz.login("EK", "12345");
liz.login("EK", "abc");
// npm install typescript --save-dev
// Complie tsc filename.ts
// Run node filename.js
