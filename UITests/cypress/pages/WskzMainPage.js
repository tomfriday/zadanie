class WskzMainPage {
  selectTabFromMenu(menu, tab) {
    cy.get('div[data-testid="linkElement"]').contains(menu).trigger('mouseover')
    cy.contains(tab).click({ force: true }) // It actually directly clicks hidden elementm, mouseover doesn't work for me at this situation, i would need extra time to figure out why :)
  }
  checkStudentInfo(name, year) {
    cy.get('div[role="listitem"]')
      .first()
      .should('contain.text', year)
      .should('contain.text', name)
  }
}
export const wskzMainPage = new WskzMainPage()
