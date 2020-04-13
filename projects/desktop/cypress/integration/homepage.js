/* eslint no-undef: 0 */

describe('Homepage', () => {
    it('Can visit the page', () => {
    // Going to http://baseUrl/
        cy.visit('/')
    })

    it('Should contains inputs with grey border', () => {
    // Email field
        cy
            .contains('Email address')
            .parentsUntil('[data-testid=input]')
            .within(() => {
                cy.get('[data-testid=inputBorder]')
                    .should('have.css', 'background-color')
                    // Cypress only accept rgb(a)
                    .and('eq', 'rgb(109, 109, 109)')
            })

        // Password field
        // We don't need to test the color, this is the same component than emailField
        cy
            .contains('Password')
    })

    it('Should change inputs border to red and display an error when it is incorrect', () => {
        cy
            .contains('Email address')
            .parent()
            .within(() => {
                // Making error appears
                cy.get('input')
                    .focus()
                    .blur()
            })
            .parentsUntil('[data-testid=input]')
            .parent()
            .within(() => {
                cy.get('[data-testid=inputBorder]')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(227, 86, 86)')

                cy.get('[data-testid=inputError]')
                    .should('have.css', 'color')
                    .and('eq', 'rgb(227, 86, 86)')
            })
    })

    it('Should change inputs border to pink-blue gradient when it is correct', () => {
        cy
            .contains('Email address')
            .parent()
            .within(() => {
                cy.get('input')
                    .type('hello@bitsky.be')
            })
            .parentsUntil('[data-testid=input]')
            .parent()
            .within(() => {
                cy.get('[data-testid=inputBorder]')
                    .should('have.css', 'background')
                    .and('eq', 'rgba(0, 0, 0, 0) linear-gradient(rgb(245, 161, 246) 0%, rgb(155, 208, 253) 100%) repeat scroll 0% 0% / auto padding-box border-box')
            })
    })

    it('Should show the password when the eye icon is clicked', () => {
        cy
            .contains('Password')
            .parentsUntil('[data-testid=input]')
            .within(() => {
                cy.get('input')
                    .should('have.attr', 'type')
                    .and('eq', 'password')
                cy.get('button')
                    .click()
                cy.get('input')
                    .should('have.attr', 'type')
                    .and('eq', 'text')
            })

    })

    it('Should contains a checkbox and change its color when checked', () => {
        cy
            .contains('Remember me')
            .within(() => {
                cy.get('span')
                    .click()
                    .should('have.css', 'background')
                    .and('eq', 'rgba(0, 0, 0, 0) linear-gradient(45deg, rgb(245, 161, 246) 0%, rgb(155, 208, 253) 100%) repeat scroll 0% 0% / auto padding-box border-box')
            })
    })
})
