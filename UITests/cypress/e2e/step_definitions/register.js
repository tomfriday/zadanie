import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import registration from '../../fixtures/registration.json'
import { registerPage } from '../../pages/RegisterPage'
import { global } from '../../pages/Global'

let runID
let email
before(() => {
  runID = global.testID()
})
Given('Visit registration page', () => {
  cy.visit('/' + '/registration')
})

When('Type unique email adress', () => {
  email = runID + '_' + registration.email
  registerPage.typeEmail(email) // i want email to be uniqe everytime so i paste runID at the beginning of email
})
And('Type Password', () => {
  registerPage.typePassword(registration.password)
})
And('Select Poland as a country', () => {
  registerPage.selectCountry(registration.country)
})
And('Select Movies Music and Games in Hobby section', () => {
  registerPage.selectHobby(registration.hobby)
})
And('Upload photo', () => {
  registerPage.uploadPhoto('cypress/fixtures/test.png')
})
And('Type Additional info', () => {
  registerPage.typeAdditionalInfo(registration.additionalInfo)
})
And('Check all Conditions of use checkboxes, and save the registration', () => {
  registerPage.checkConditionsOfUse()
  registerPage.submitRegistration()
})

Then(
  'I should see success information, and URL adress should include success-registration',
  () => {
    cy.url().should('contain', '/success-registration')
    cy.contains('Account created for: ' + email).should('be.visible')
  }
)
