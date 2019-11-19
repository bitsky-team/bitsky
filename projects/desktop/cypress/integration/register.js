describe('Register', () => {
  it('Can visit the page', () => {
    cy.visit('/register')
  })

  it('Check all the inputs are present', () => {
    cy.contains('Firstname')
    cy.contains('Lastname')
    cy.contains('Email')
    cy.contains('Password')
    cy.contains('By checking this box')
  })

  it('Should check the checkbox to send the form', () => {
    cy
      .contains('Firstname')
      .parent()
      .within(() => {
        cy.get('input')
          .type('John')
      })
    cy
      .contains('Lastname')
      .parent()
      .within(() => {
        cy.get('input')
          .type('Doe')
      })
    cy
      .contains('Email')
      .parent()
      .within(() => {
        cy.get('input')
          .type('john@bitsky.be')
      })
    cy
      .contains('Password')
      .parent()
      .within(() => {
        cy.get('input')
          .type('iliketrains')
      })

    cy.get('form').submit()

    // Checks if the checkbox text is red
    cy
      .contains('By checking this box')
      .should('have.css', 'color')
      .and('eq', 'rgb(227, 86, 86)')
  })

  // I don't need to do more test because the components used for the register screen
  // are the same than the components used for the log in screen
})
