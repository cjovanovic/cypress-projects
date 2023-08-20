/// <reference types="Cypress" />

describe('My First Test Suite', function()
  {
    it('My First Test Case', function()
      {
        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")

        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //using alias for reusing locators!
        cy.get('.products').as('productLocator')

        //array iteration
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

         const textVeg = $el.find('h4.product-name').text()
         
         //grabbing the text for validations
         if(textVeg.includes('Cashews'))
          {

          cy.wrap($el).find('button').click()

          }

          // $el.find('button').trigger('click')
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
      }
    )
  }
) 