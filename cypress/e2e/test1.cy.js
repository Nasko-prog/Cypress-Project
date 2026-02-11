//<reference types="cypress"/>

it('Google Search', () => {

    cy.visit('https://google.com')

  
cy.get('[name="q"]').type('Automation Step by Step{Enter}')

    //cy.contains('Google Търсене').click()
    cy.wait(15000)

cy.contains('Videos').click()



     })
