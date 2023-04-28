class RegisterPage {
  elements = {
    emailInput: () => cy.get('[data-cy="username"]'),
    passwordInput: () => cy.get('[data-cy="password"]'),
    countrySelect: () => cy.get('[data-cy="country"]'),
    hobbySelect: () => cy.get('[data-cy="hobby"]'),
    photoUploader: () => cy.get('#photo'),
    additionalInfoTextArea: () => cy.get('[data-cy="info"]'),
    checkboxes: () => cy.get('[data-cy="registration-consent"]'),
    submitBtn: () => cy.get('input[type="submit"]')
  }
  typeEmail(username) {
    this.elements.emailInput().type(username)
  }
  typePassword(password) {
    this.elements.passwordInput().type(password)
  }
  selectCountry(country) {
    this.elements.countrySelect().select(country)
  }
  selectHobby(hobby) {
    this.elements.hobbySelect().select(hobby)
  }
  uploadPhoto(photo) {
    this.elements.photoUploader().selectFile(photo)
  }
  typeAdditionalInfo(info) {
    this.elements.additionalInfoTextArea().type(info)
  }
  checkConditionsOfUse() {
    this.elements.checkboxes().check({ multiple: true })
  }
  submitRegistration() {
    this.elements.submitBtn().click()
  }
}
export const registerPage = new RegisterPage()
