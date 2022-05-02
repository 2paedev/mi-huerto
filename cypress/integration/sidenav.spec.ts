describe('Sidenav E2E Testing', () => {
  it('Should close sidenav with backdrop action', () => {
    cy.visit('/')
    cy.get('.toolbar__menu').click()
    cy.get('.mat-sidenav').should('be.visible')
    cy.get('.mat-drawer-backdrop').click(-50, -50, { force: true })
    cy.wait(500)
    cy.get('.mat-sidenav').should('not.be.visible')
  })

  it('Should link to companion planting page', () => {
    cy.visit('/')
    cy.get('.toolbar__menu').click()
    cy.get('.mat-list-item').contains('Asociación de cultivos').click()
    cy.url().should('include', '/companion-planting')
  })

  it('Should link to settings page', () => {
    cy.visit('/')
    cy.get('.toolbar__menu').click()
    cy.get('.mat-list-item').contains('Configuración').click()
    cy.url().should('include', '/settings')
  })

  it('Should link to help page', () => {
    cy.visit('/')
    cy.get('.toolbar__menu').click()
    cy.get('.mat-list-item').contains('Ayuda').click()
    cy.url().should('include', '/help')
  })
})
