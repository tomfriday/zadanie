Feature: domain changes and check student government information tab


I would like, after checking the domain change, to go to www.wskz.pl and then from the tab For Dla Studenta -> Samorząd Studencki to check the correct display of the name and what year the student Tomasz Michalik is in

Scenario: Visiting new-page and redirecting to https://www.wskz.pl/ from a link
Given Visit new-page
When Click on button Click me!
Then Successfull redirect to https://www.wskz.pl/

Scenario: From menu, go to  Dla Studenta -> Samorząd Studencki to check the correct display of the name and what year the student Tomasz Michalik is in
Given Beeing on https://www.wskz.pl/
When From Dla Studenta dropdown menu select Samorząd Studencki
Then On the first place it should be name of Tomasz Michalik and information about II year of study
