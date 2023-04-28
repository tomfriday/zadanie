Feature: API tests

I want to test all available endpoints

Scenario: Retrieving a list of customers
When I send a GET request
Then I receive a response with the code 200
And the received list of customers is as expected

Scenario: Retrieving customer details
When I send a GET query on customer with id 1
Then I receive a response with the code 200
And the received customer details are as expected

Scenario: Adding a new customer
When I send a POST query with a new customer
Then I receive a response with code 201
And the received customer data is as expected

Scenario: Updating customer data
When I send a PUT query with the new customer data
Then I receive a response with the code 200
And the received customer data is as expected

Scenario: Deleting customer data
When  I send a DELETE query on customer with id 1
Then I receive a response with code 204


