/// <reference types="Cypress" />

describe('My Nineth Test Suite', function()
  {
    
    //runs once before all tests
    before(() =>
    {
      cy.fixture('example').then(function(data)
      {
        //this.data => scope of 'data' variable is entire class => use to initialize global variable for accessing everywhere
        this.data = data //two different 'data' variables!
      })
    })

    it('My Nineth Test Case', function()
      {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //assertion -> validating of attribute properties
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
        
        //builded customized command - for more info review commands.js file!
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        //parameterizing test data from json file using each command - for more info review example.json/commands.js files!
        this.data.productName.forEach(function(element)
        {
          cy.selectProduct(element)
        })



      }
    )
  }
) 

