const Person = require('../../src/shouty.js')
const { Given, When, Then, } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')

Given('Lucy is located {int} meters from Sean', function (distance) {
    // Write code here that turns the phrase above into concrete actions
    // Add Person objects
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)
    // return pending
    // console.log(distance)
})

When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    this.sean.shout(message)
    this.message = message
    // return 'pending'
})

Then('Lucy hears Sean\'s bagel message', function () {
    assertThat(this.lucy.bagelMessageHeard(), is([this.message]))
  // Write code here that turns the phrase above into concrete actions
//   return 'pending'
})

Then('Lucy hears Sean\'s coffee message', function () {
    assertThat(this.lucy.coffeeMessageHeard(), is([this.message]))
  // Write code here that turns the phrase above into concrete actions
//   return 'pending'
})

// And('Sean shouts {string}', function (message){
//     this.sean.shout(message)
//     this.message = message
// })