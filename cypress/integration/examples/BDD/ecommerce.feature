Feature: End to End Ecommerce validation

    App Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce Page
    When I add items to Cart
    When Validate the total price
    Then Select country, check checkbox and verify the success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open eCommerce Page
    When I fill the form details
    | name | gender |
    | Boby | Male   |
    When Validate the form behaviour
    Then Select the Shop Page