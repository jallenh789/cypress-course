describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscirbe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('dumpstuff12341234@yahoo.com')
        cy.contains(/Successfully subbed: dumpstuff12341234@yahoo.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: dumpstuff12341234@yahoo.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: dumpstuff12341234@yahoo.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('dumpstuff12341234@yahoo.io')
        cy.contains(/Invalid email: dumpstuff12341234@yahoo.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: dumpstuff12341234@yahoo.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: dumpstuff12341234@yahoo.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')



    })
})