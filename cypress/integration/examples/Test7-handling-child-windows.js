/// <reference types="Cypress" />

describe('My Seventh Test Suite', function()
  {
    it('My Seventh Test Case', function()
      {
        //url -> rahulshettyacademy.com
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //resolve the promise
        cy.get('#opentab').then(function(el)
        {
          //retrieve the 'href' property
          const url = el.prop('href') 
          cy.visit(url) //url -> qaclickacademy.com
          cy.origin(url, () =>
          {
            //all operations from different origin must need to be done inside this block!
            cy.get('div.sub-menu-bar [href*="about"]').click()
            cy.url().should('include', 'about')
          })

        })

      }
    )
  }
) 

