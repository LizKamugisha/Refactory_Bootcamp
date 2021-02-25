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

// Step 2 & 3
// Travel Strategy SuperType
// can also use abstract class & method
interface TravelStrategy {
    travel(): any
}

// Step 4
// concrete implementation, a class that implements an interface / abstract class
class TravelByBicycle implements TravelStrategy {
    travel() {
        console.log('Travelling by Bicycle')
    }
}
class TravelByTaxi implements TravelStrategy {
    travel() {
        console.log('Travelling by Taxi')
    }
}
class TravelByBus implements TravelStrategy {
    travel() {
        console.log('Travelling by Bus')
    }
}

// Travel is the context class.
class Traveler {
    // Step 5
    // Variables
    protected travelStrategy: TravelStrategy;
    // Methods
    // Step 1 & 7
    // The choice of the travel strategy is by delegation and composition 
    travel() {
        this.travelStrategy.travel();
    }
    // Step 6 - Strategy Setter
    public setTravelStartegy(travelStrategyArg: TravelStrategy) {
        this.travelStrategy = travelStrategyArg
    }
}

// Specific Travelers
class ShortRouteTraveler extends Traveler {
    travel() {
        console.log('I am a short route traveler');
        this.travelStrategy.travel();
    }
}
class MediumRouteTraveler extends Traveler {
    travel() {
        console.log('I am a medium route traveler')
        this.travelStrategy.travel();
    }
}
class LongRouteTraveler extends Traveler {
    travel() {
        console.log('I am a long route traveler')
        this.travelStrategy.travel();
    }
}

// Step 8 - testing
// Traveler who can polymorphically travel
let traveler: Traveler;

// Short route traveler who wants to travel by Bus
traveler = new ShortRouteTraveler()
traveler.setTravelStartegy(new TravelByBus())
traveler.travel()

// Long route traveler who wants to travel by Bus
traveler = new LongRouteTraveler()
traveler.setTravelStartegy(new TravelByBus())
traveler.travel()

// Medium route traveler who wants to travel by Bus
traveler = new MediumRouteTraveler()
traveler.setTravelStartegy(new TravelByBicycle())
traveler.travel()



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