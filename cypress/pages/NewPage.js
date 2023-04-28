class NewPage {
  clickButton() {
    cy.get('a')
      .contains('Click me!')
      .should('have.attr', 'target', '_blank') // check target attr has _blank
      .invoke('attr', 'target', '_self')
      .click()
  }
}
export const newPage = new NewPage()
