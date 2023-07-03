/// <reference types="Cypress" />

describe('My First Test Suite', function()
  {
    it('My First Test Case', function()
      {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //using alias for reusing locators!
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

         const textVeg = $el.find('h4.product-name').text()
         
         //grabbing the text for validations
         if(textVeg.includes('Cashews'))
         //the scope is only on one product -> only one tag 'button'
         //click is deprecated for the unresolved promise (state or step behaviour) -> solution 1 is to wrap the promise!
          cy.wrap($el).find('button').click()
          
          //click is deprecated for the unresolved promise -> solution 2 is to use trigger method!
          // $el.find('button').trigger('click')
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
      }
    )
  }
) 