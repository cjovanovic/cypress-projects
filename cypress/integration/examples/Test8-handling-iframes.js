/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"

describe('My Eight Test Suite', function()
  {
    
    it('My Eight Test Case', function()
      {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //loading iframe into the cypress object
        cy.frameLoaded('#courses-iframe')
        
        //switch to the iframe mode to perform actions inside iframe
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('h1.pricing-title').should('have.length', 2)


      }
    )
  }
) 

//initialize global variable