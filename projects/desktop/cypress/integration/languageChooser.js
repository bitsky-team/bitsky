/* eslint no-undef: 0 */

describe('Language choose', () => {
    it('Goes on the homepage to test the language chooser', () => cy.visit('/'))

    it('Can change language to french', () => {
        // Find the languageChooser button & click on it
        cy.get('[data-testid=translationToggler]').click()

        // Switch language to french
        cy.get('[data-testid=fr]').click()
    })

    it('Can change language to spanish', () => {
        // Find the languageChooser button & click on it
        cy.get('[data-testid=translationToggler]').click()

        // Switch language to spanish
        cy.get('[data-testid=es]').click()
    })

    it('Can change language to dutch', () => {
        // Find the languageChooser button & click on it
        cy.get('[data-testid=translationToggler]').click()

        // Switch language to dutch
        cy.get('[data-testid=nl]').click()
    })

    // Be sure that the last chosen language is english
    it('Can change language to english', () => {
        // Find the languageChooser button & click on it
        cy.get('[data-testid=translationToggler]').click()

        // Switch language to english
        cy.get('[data-testid=en]').click()
    })
})
