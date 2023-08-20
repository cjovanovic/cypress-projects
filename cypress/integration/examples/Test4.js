/// <reference types="Cypress" />

describe('My Fourth Test Suite', function()
  {
    it('My Fourth Test Case', function()
      {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window alert
        cy.on('window:alert', (str) => 
        {
          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window confirm
        cy.on('window:confirm', (str) => 
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //child tab handling - remove 'target' attribute!
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //asertion to check the URL -> use 'include' method for string passed as a second argument
        // cy.url().should('include', 'qaclickacademy') -> not working for different superdomains, read the https://github.com/cypress-io/cypress/issues/26132
        //navigating back to the previous URL
        //cy.go('back') -> not working for different superdomains, read the doc https://docs.cypress.io/guides/guides/cross-origin-testing 
      }
    )
  }
) 

