/*
SINGLETON DESIGN PATTERN
--------------------------
Objectives:
- ensure that a class has just a single instance
- provide a global access point to that instance

Steps:
Step 1: Create a class to turned into the singleton class.
Step 2: Specify all the class data members (variables).
Step 3: Specify all the class operations or methods.
Step 4: create a static member of the class to store the very first instance of the class to be created.
Step 5: Within and at the end of the constructor of the class, assign the static property (created in step 4) a value, which values is an instance of the class (singleton class)
Step 6: Check for whether there exists any created instance of the singleton class. if there is an instance of the current class already created, then return that instance.
Step 7: Test for whether the singleton class works as expected. The class creates only one instance irrespective of how many times it is instantiated.
*/

// Step 1
class User {
    // Step 2
    public name: string;
    public username: string;
    private password: string;
    protected email: string;
    protected phoneNumber: string;

    //Step 4
    private static currentUser;

    // Step 3
    constructor(usernameArg: string, nameArg: string) {
        // Step 6
        if (User.currentUser instanceof User) {
            return User.currentUser;
        }
        this.username = usernameArg
        this.name = nameArg
        // Step 5
        User.currentUser = this
    }
    // Step 3
    public getUser() {
        return User.currentUser;
    }
};
// Step 7
const user1 = new User("Liz20", "Liz");
console.log(user1.getUser());

const user2 = new User("Ben21", "Ben");
console.log(user2.getUser());

// Note: only one user can be logged in at one time