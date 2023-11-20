Feature: validate health

    Scenario: Check health
        Given I call HealthCheck
        Then The return should be true