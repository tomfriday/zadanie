import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { newPage } from '../../pages/newPage'
import { wskzMainPage } from '../../pages/wskzMainPage'
import studentInfo from '../../fixtures/studentInfo.json'

Given('Visit new-page', () => {
  cy.visit('/' + '/new-page')
  cy.contains('TASK 3').should('be.visible')
})
When('Click on button Click me!', () => {
  newPage.clickButton()
})

Then('Successfull redirect to https://www.wskz.pl/', () => {
  cy.url().should('eq', 'https://www.wskz.pl/')
})

Given('Beeing on https://www.wskz.pl/', () => {
  cy.url().should('eq', 'https://www.wskz.pl/')
})

When('From Dla Studenta dropdown menu select Samorząd Studencki', () => {
  wskzMainPage.selectTabFromMenu('Dla Studenta', 'Samorząd studencki')
})

Then(
  'On the first place it should be name of Tomasz Michalik and information about II year of study',
  () => {
    wskzMainPage.checkStudentInfo(studentInfo.studentCouncil.name)
    wskzMainPage.checkStudentInfo(studentInfo.studentCouncil.yearInfo)
  }
)
