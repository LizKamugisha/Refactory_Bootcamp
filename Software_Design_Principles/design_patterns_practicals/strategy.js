/*
STRATEGY DESIGN PATTERN
------------------------
Traveler
    - shortRoute Traveler
    - mediumRouteTraveler
    - longRouteTraveler

Travel Means
    - By Bicycle
    - By Taxi
    - by Bus

Step 1: Identify the aspects of the Context class that vary (across subtypes and / or objects).
Step 2: Separate the aspects of the class that vary from those that don’t.
Step 3: Encapsulate what varies / what is separates (Create a supertype, i.e. Interface or Abstract class). This serves as the (Strategy / Policy identifier).
Step 4: Program to an interface (Abstraction), not implementation. Create concrete implementations of the Strategy whereby each extends an abstract class or implements an interface.
Step 5: In the context class, create a variable of type as the supertype of the strategy (Let it’s type not be any of the concrete implementations of the strategy supertype). This variable can possibly be protected.
Step 6: In the context class, Create a setter method for the variable created in step 5.
Step 7: In the context class, Create a method to be used for executing the abstract method in the strategy
Step 8: Test for whether the The Strategy Pattern is implemented successfully.
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
// Step 4
// concrete implementation, a class that implements an interface / abstract class
var TravelByBicycle = /** @class */ (function () {
    function TravelByBicycle() {
    }
    TravelByBicycle.prototype.travel = function () {
        console.log('Travelling by Bicycle');
    };
    return TravelByBicycle;
}());
var TravelByTaxi = /** @class */ (function () {
    function TravelByTaxi() {
    }
    TravelByTaxi.prototype.travel = function () {
        console.log('Travelling by Taxi');
    };
    return TravelByTaxi;
}());
var TravelByBus = /** @class */ (function () {
    function TravelByBus() {
    }
    TravelByBus.prototype.travel = function () {
        console.log('Travelling by Bus');
    };
    return TravelByBus;
}());
// Travel is the context class.
var Traveler = /** @class */ (function () {
    function Traveler() {
    }
    // Methods
    // Step 1 & 7
    Traveler.prototype.travel = function () {
        this.travelStrategy.travel();
    };
    // Step 6
    Traveler.prototype.setTravelStartegy = function (travelStrategyArg) {
        this.travelStrategy = travelStrategyArg;
    };
    return Traveler;
}());
var ShortRouteTraveler = /** @class */ (function (_super) {
    __extends(ShortRouteTraveler, _super);
    function ShortRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortRouteTraveler.prototype.travel = function () {
        console.log('I am a short route traveler');
        this.travelStrategy.travel();
    };
    return ShortRouteTraveler;
}(Traveler));
var MediumRouteTraveler = /** @class */ (function (_super) {
    __extends(MediumRouteTraveler, _super);
    function MediumRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediumRouteTraveler.prototype.travel = function () {
        console.log('I am a medium route traveler');
        this.travelStrategy.travel();
    };
    return MediumRouteTraveler;
}(Traveler));
var LongRouteTraveler = /** @class */ (function (_super) {
    __extends(LongRouteTraveler, _super);
    function LongRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRouteTraveler.prototype.travel = function () {
        console.log('I am a long route traveler');
        this.travelStrategy.travel();
    };
    return LongRouteTraveler;
}(Traveler));
var traveler;
// Short route traveler who wants to travel by Bus
traveler = new ShortRouteTraveler();
traveler.setTravelStartegy(new TravelByBus());
traveler.travel();
// Long route traveler who wants to travel by Bus
traveler = new LongRouteTraveler();
traveler.setTravelStartegy(new TravelByBus());
traveler.travel();
// Medium route traveler who wants to travel by Bus
traveler = new MediumRouteTraveler();
traveler.setTravelStartegy(new TravelByBicycle());
traveler.travel();
// // Context Class
// class Commute {
//     travel(transport){
//         return transport.travelTime();
//     }
// }
// // Interface
// class Vehicle {
//     travelTime(){
//         return this.timeTaken;
//     }
// }
// // Strategy 1
// class Bus extends Vehicle{
//     constructor() {
//         super();
//         this.timeTaken = 30;
//     }
// };
// // Strategy 2
// class Taxi extends Vehicle{
//     constructor() {
//         super();
//         this.timeTaken = 15;
//     }
// };
// // Strategy 3
// class Bicycle extends Vehicle{
//     constructor(){
//         super();
//         this.timeTaken = 10;
//     }
// };
// // Usage
// const commute = new Commute();
// console.log(commute.travel(new Bus()));
// console.log(commute.travel(new Taxi()));
// console.log(commute.travel(new Bicycle()));
