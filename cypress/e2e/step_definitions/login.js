import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import credentials from '../../fixtures/credentials.json'
import { loginPage } from '../../pages/LoginPage.js'

Given('Visit login page', () => {
  cy.visit('/')
})
When('Provides correct credentials, and submit login', () => {
  loginPage.typeUsername(credentials.validCredentials.username)
  loginPage.typePassword(credentials.validCredentials.password)
  loginPage.submitLogin()
})

Then('Should see homepage with success information', () => {
  cy.url().should('contain', '/home')
  loginPage.elements
    .successMessage(credentials.validCredentials.username)
    .should('be.visible')
})

Given('Visit login page', () => {
  cy.visit('/')
})
When('Provides not correct credentials, and submit login', () => {
  loginPage.typeUsername(credentials.failCredentials.username)
  loginPage.typePassword(credentials.failCredentials.password)
  loginPage.submitLogin()
})

Then('Should see fail information about incorrect credentials', () => {
  cy.url().should('not.contain', '/home')
  loginPage.elements.failMessage().should('be.visible')
})
