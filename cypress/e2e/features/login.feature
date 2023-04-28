Feature: Login to the system

I want to try successfull and failed login to the system

Scenario: Successfull login to the system with given credentials
Given Visit login page
When Type correct credentials, and submit login
Then Should see homepage with success information

Scenario: Failed login to the system
Given Visit login page
When Type not correct credentials, and submit login
Then Should see fail information about incorrect credentials