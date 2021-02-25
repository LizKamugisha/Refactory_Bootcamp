/*
OBSERVER DESIGN PATTERN
------------------------
Observer is a behavioral design pattern that lets you define a subscription mechanism 
to notify multiple objects about any events that happen to the object they’re observing.

Objectives:
1) Define a 1-to-many dependancy between objects
2) When the Observable object changes state, all observers should be notified and updated automatically

The 2 Parties:
- Observable / Subject / Concrete Observer
    - Main state
    - List of observers
    - Subscribing observers
    - Unsubscribing observers
    - Notifying observers
    - Triggering the notification process
    - Causing the change in state

- Observer / abstrat class
    - recieving updates

Steps:
Step 1: Create an abstract Type (interface or abstract class) for any possible observer, with a method declaration for receiving updates or notification.
Step 2: You can optionally create an abstract type (interface or abstract class) for all the mechanisms an Observable must contain.
Step 3: Create the class to act as the observable.
Step 4: With in the observable class, define the Main State of the observable.
Step 5: With in the observable class, define the List or collection of Observers.
Step 6: With in the observable class, define the mechanism for adding an Observer to the list of Observers.
Step 7: With in the observable class, define the mechanism for removing an Observer from the list of Observers.
Step 8: With in the observable class, define the mechanism for notifying all observers, of the Observable internal state change.
Step 9: With in the observable class, define the mechanism for triggering the notification of all observers, of the Observable internal state change.
Step 10: With in the observable class, define the mechanism for causing the change in state of the Observable and invoking the notification trigger.
Step 11: Create concrete implementations of the observer super type while specifying what happens (on receiving update or with updates)
Step 12: Create an observable object (Instantiate Observable).
Step 13: Create observer objects (Instantiate Observer) .
Step 14: subscribe observers to observable.
Step 14: Test to see whether the Observer pattern has been implemented successfully. Try to invoke the method that causes change in the observable and see whether all the subscribers (observers) receive notification about the changes.
*/

// Observers Supertype
interface Subscriber {
    update(newState: object): unknown;
};

class Publisher {
    // Feilds
    // State
    news: object;
    // List of subscribers
    subscribers: Array<Subscriber>

    // Operations
    constructor() {
        this.news = {};
        this.subscribers = [];
    }
    // Subscribing observers
    subscribe(subscriber: Subscriber) {
        const indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            return null
        }
        this.subscribers.push(subscriber)
    }
    // Unsubscribing observers
    unsubscribe(subscriber: Subscriber) {
        const indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            this.subscribers.splice(indexOfSubscriber, 1)
        }
    }
    // Notifying observers
    notify() {
        for (let subscriber of this.subscribers) {
            subscriber.update(this.news);
        }
    }

    // Triggering the notification process
    startNotification() {
        this.notify();
    }
    // Causing the change in state
    publish(latestNews: object) {
        this.news = latestNews;
        this.startNotification();
    }
};

// Concrete Observer (Subscriber)
class shopCustomer implements Subscriber {
    shopNewsletter: object;
    name: string;

    constructor(nameArg: string) {
        this.name = nameArg;
    }

    receiveNewsletter() {
        console.log(this.shopNewsletter)
    }
    update(news: object) {
        this.shopNewsletter = { ...news, name: this.name }
        this.receiveNewsletter();
    }
}

// Create Publisher Object
let gadgetShop: Publisher = new Publisher();

// Create Observers (Subscribers)
let john: Subscriber = new shopCustomer("John");
let jill: Subscriber = new shopCustomer("Jill");

// Subscription
gadgetShop.subscribe(john);
gadgetShop.subscribe(jill);

// unsubscribe
gadgetShop.unsubscribe(jill);

// Publishing
gadgetShop.publish({
    newsletter: "Latest iPhone now in stock"
});