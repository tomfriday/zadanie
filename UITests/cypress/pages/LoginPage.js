class LoginPage {
  elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('[type="submit"]'),
    successMessage: (username) =>
      cy.contains('Welcome back, ' + username + '!'),
    failMessage: () => cy.contains('Incorrect Username and/or Password!')
  }
  typeUsername(username) {
    this.elements.usernameInput().type(username)
  }
  typePassword(password) {
    this.elements.passwordInput().type(password)
  }
  submitLogin() {
    this.elements.loginBtn().click()
  }
}

export const loginPage = new LoginPage()
