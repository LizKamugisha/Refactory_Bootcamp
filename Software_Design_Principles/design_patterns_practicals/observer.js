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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
var Publisher = /** @class */ (function () {
    // Operations
    function Publisher() {
        this.news = {};
        this.subscribers = [];
    }
    // Subscribing observers
    Publisher.prototype.subscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            return null;
        }
        this.subscribers.push(subscriber);
    };
    // Unsubscribing observers
    Publisher.prototype.unsubscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            // console.log(subscriber);
            // Fix Bug Here on unsubscribe function
            this.subscribers.splice(indexOfSubscriber, 1);
        }
    };
    // Notifying observers
    Publisher.prototype.notify = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.news);
        }
    };
    // Triggering the notification process
    Publisher.prototype.startNotification = function () {
        this.notify();
    };
    // Causing the change in state
    Publisher.prototype.publish = function (latestNews) {
        this.news = latestNews;
        this.startNotification();
    };
    return Publisher;
}());
;
// Concrete Observer (Subscriber)
var shopCustomer = /** @class */ (function () {
    function shopCustomer(nameArg) {
        this.name = nameArg;
    }
    shopCustomer.prototype.receiveNewsletter = function () {
        console.log(this.shopNewsletter);
    };
    shopCustomer.prototype.update = function (news) {
        this.shopNewsletter = __assign(__assign({}, news), { name: this.name });
        this.receiveNewsletter();
    };
    return shopCustomer;
}());
// Create Publisher Object
var gadgetShop = new Publisher();
// Create Observers (Subscribers)
var john = new shopCustomer("John");
var jill = new shopCustomer("Jill");
// Subscription
gadgetShop.subscribe(john);
gadgetShop.subscribe(jill);
// unsubscribe
gadgetShop.unsubscribe(jill);
// Publishing
gadgetShop.publish({
    newsletter: "Latest iPhone now in stock"
});
