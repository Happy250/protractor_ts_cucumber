Feature: I am going to validate my website functionalities 
    Scenario: Calculator Add Functionality testing
        Given I will navigate to "Calculator" Site
        When I add two number "3" and "5"
        Then the output displayed should be "8"

    Scenario: Calculator Add Functionality testing
        Given I will navigate to "Calculator" Site
        When I add two number "2" and "7"
        Then the output displayed should be "9"
    

    Scenario Outline: Calculator Add Functionality testing
        Given I will navigate to "AngularJS" Site
        When I clicked on header link
        And you will navigate to angular Page
        Then you will enter "<key_word>" in search box

        Examples:
        | key_word | 
        | Chai     | 
        | Yi       |
        | Bill     |