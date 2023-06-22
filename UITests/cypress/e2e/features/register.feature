Feature: Register new user in the system

I want to register new user in the system

Scenario: Register new, polish user in the system
Given Visit registration page
When Type unique email adress
And Type Password
And Select Poland as a country
And Select Movies Music and Games in Hobby section
And Upload photo
And Type Additional info 
And Check all Conditions of use checkboxes, and save the registration
Then I should see success information, and URL adress should include success-registration
