describe('Toolbar E2E Testing', () => {
  it('Should open/close sidenav with menu button', () => {
    cy.visit('/')
    cy.get('.mat-sidenav').should('not.be.visible')
    cy.get('.toolbar__menu').click()
    cy.get('.mat-sidenav').should('be.visible')
    cy.get('.toolbar__menu').click()
    cy.wait(500)
    cy.get('.mat-sidenav').should('not.be.visible')
  })

  it('Should change between light/dark mode', () => {
    cy.visit('/')
    cy.get('.dark-theme-btn').click()
    cy.get('.dark-theme').should('exist')
    cy.get('.light-theme-btn').click()
    cy.get('.dark-theme').should('not.exist')
  })

  it('Should load light theme if it is saved in localStorage', () => {
    localStorage.setItem('mh-dark', 'false')
    cy.visit('/')
    cy.get('.dark-theme').should('not.exist')
  })

  it('Should load dark theme if it is saved in localStorage', () => {
    localStorage.setItem('mh-dark', 'true')
    cy.visit('/')
    cy.get('.dark-theme').should('exist')
  })

  it('Should load logo image and be visible', () => {
    cy.visit('/')
    cy.get('.mat-toolbar').find('img').should('have.attr', 'src').should('include', 'images/logo')
    cy.get('img.toolbar__logo').should('be.visible')
  })
})
