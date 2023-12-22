Feature: Connect to server

    Scenario: Connect to server
        Given I send a GET request to "/status"
        Then The response status code should be 200