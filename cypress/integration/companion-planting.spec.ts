describe('Companion Planting E2E Testing', () => {
  it('Should exist an info panel component with their icon', () => {
    cy.visit('/companion-planting')
    cy.get('.info-panel').should('be.visible')
    cy.get('.info-panel .mat-icon').should('be.visible')
  })

  it('Should exist a select component', () => {
    cy.visit('/companion-planting')
    cy.get('.select--field .mat-select').should('be.visible')
  })

  it('Should can select a plant in select component', () => {
    cy.visit('/companion-planting')
    cy.get('.select--field .mat-select').click()
    cy.contains('Ajo').click()
    cy.get('.mat-select-value .plant__text').should('have.text', 'Ajo')
  })

  it('Should not show plant panel component initially when page load', () => {
    cy.visit('/companion-planting')
    cy.get('.plants-panel').should('not.exist')
  })

  it('Should show plant panel component when select a plant within select component', () => {
    cy.visit('/companion-planting')
    cy.get('.plants-panel').should('not.exist')
    cy.get('.select--field .mat-select').click()
    cy.contains('Ajo').click()
    cy.get('.plants-panel').should('be.visible')
  })
})
