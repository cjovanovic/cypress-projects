/// <reference types="Cypress" />

describe('My First Test Suite', function()
  {
    it('My First Test Case', function()
      {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //filter the visible elements!
        cy.get('.product:visible').should('have.length', 4)

        //using alias for reusing locators!
        cy.get('.products').as('productLocator') 

        //parent child chaining - find -> only gets descendent DOM elements of a specific selector!
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
          console.log('sf') //print in console -> non cypress command -> need to declare it (resolve the promise)!
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

         const textVeg = $el.find('h4.product-name').text()
         
         //grabbing the text for validations
         if(textVeg.includes('Cashews'))
         {
         //the scope is only on one product -> only one tag 'button'
         //click is deprecated for the unresolved promise (state or step behaviour) -> solution 1 is to wrap the promise!
          cy.wrap($el).find('button').click()
         }
          //click is deprecated for the unresolved promise -> solution 2 is to use trigger method!
          // $el.find('button').trigger('click')
        })

        // const logo = cy.get('.brand') -> logo.text is not a function -> need to manually resolve the promise by then()!
        // logo.text() -> logo.text is not a function -> need to manually resolve the promise by then()!
        
        //assert if the logo text is displayed correctly
        cy.get('.brand').should('have.text', 'GREENKART')

        //print in test runner logs
        cy.get('.brand').then(function(logoelement)
        {
          cy.log(logoelement.text()) 
        })
      }
    )
  }
) 