Feature: Hear shout
   Sean shouts messages to listener within 15 meters range

   Background:
      Given Lucy is located 15 meters from Sean

   Scenario: Listener is within range
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean's bagel message

   Scenario: Listener hears a different message
      When Sean shouts "free coffee!"
      Then Lucy hears Sean's coffee message

#  Scenario: Listener is within range
#     Given Lucy is located 15 meters from Sean
#     When Sean shouts "free bagels at Sean's"
#     Then Lucy hears Sean's message

#  Scenario: Listener hears a different message
#     Given Lucy is located 15 meters from Sean
#     When Sean shouts "Free coffee!"
#     Then Lucy hears Sean's message