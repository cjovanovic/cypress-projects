/// <reference types="Cypress" />

describe('My Sixth Test Suite', function()
  {
    it('My Sixth Test Case', function()
      {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //invoke jQuery show() function
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        //adding attribute to force click on invisible element
        // cy.contains('Top').click({force: true})
        
        cy.url().should('include', 'top')

      }
    )
  }
) 

