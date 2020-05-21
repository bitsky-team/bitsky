/* eslint no-undef: 0 */

describe('Onboarding', () => {
    it('Cannot visit the page without token', () => {
        cy
            .visit('/onboarding')
            .url()
            .should('not.include', '/onboarding')
    })

    it('Can visit the page with a token', () => {
        localStorage.setItem('persist:root', JSON.stringify({
            "themeReducer":'{"mode":"classic"}',
            "sessionReducer":'{"language":"en","token":"yes"}',
            "_persist":'{"version":-1,"rehydrated":true}'
        }))
        cy
            .visit('/onboarding')
            .url()
            .should('include', '/onboarding')
    })

    it('Add a username', () => {
        const usernameInput = cy.get('input[name="username"]')

        usernameInput.type('Bitsky')
    })

    it('Add a birthdate', () => {
        const birthDateInput = cy.get('input[name="birthdate"]')

        // Incorrect value
        birthDateInput
            .type('a-#$')
            .should('have.value', '')
            // Check mask
            .type('1')
            .should('have.value', '1_/__/____')
            // Fill all the input
            .type('0011910')
            .should('have.value', '10/01/1910')
    })

    it('Add a description', () => {
        // Should be multiline
        const descriptionInput = cy.get('textarea[name="description"]')
        descriptionInput
            .type('test')
            .type('{enter}')
            .type('test')
            .should('have.value', 'test\ntest')
    })

    it('Add an avatar', () => {
        // Opening modal
        cy
            .get('[data-testid=avatarOverlay]')
            .click({force: true})

        // The editor should not be there
        cy
            .get('canvas')
            .should('not.exist')

        // Upload file should show the canvas
        const fileInput = cy.get('[data-testid=imageInput]')
        fileInput
            .attach_file('files/image.png', 'image/png')
            .trigger('change', { force: true })
        cy
            .get('canvas')
            .should('exist')
    })

    it('Change the avatar correctly', () => {
        const avatar = cy.get('[data-testid=avatar]')
        let avatarValue = avatar.invoke('val')

        const saveButton = cy
            .get('[data-testid=avatarCropperDialog] .MuiGrid-root:last-child button')
            .first()

        saveButton.click({ force: true })

        avatar
            .invoke('val')
            .should('not.eq', avatarValue)
    })

    it('Reset the avatar editor flow', () => {
        cy
            .get('[data-testid=avatarOverlay]')
            .click({force: true})

        // Click on reset button
        cy
            .get('[data-testid=avatarCropperDialog] .MuiGrid-root:nth-child(2) button')
            .click()

        cy
            .get('canvas')
            .should('not.exist')
    })
})