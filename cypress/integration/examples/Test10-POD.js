/// <reference types="Cypress" />

//class import
import '../../support/pageObjects/HomePage.js'
import HomePage from '../../support/pageObjects/HomePage.js'
import ProductPage from '../../support/pageObjects/ProductPage.js'
import CheckoutPage from '../../support/pageObjects/CheckoutPage.js'
import PurchasePage from '../../support/pageObjects/PurchasePage.js'

describe('My 10th Test Suite', function() {

    before(() =>
    {
        cy.fixture('example').then(function(data)
        {
        
        //this.data => scope of 'data' variable is entire class => use to initialize global variable for accessing everywhere
        this.data = data //two different 'data' variables!

        })
    })
    
    it('10th TC - POD', function()
    {

        //create an object for imported class with the import keyword
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
        const purchasePage = new PurchasePage()

        //use environmental variable
        cy.visit(Cypress.env('url') + "/angularpractice/")
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //assertion -> validating of attribute properties
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneurRadio().should('be.disabled')
        homePage.getShopTab().click()
        
        //parameterizing test data from json file using each command ->
        //for more info review example.json/commands.js files!
        this.data.productName.forEach(function(element)
        {
          cy.selectProduct(element)
        })
        productPage.checkOutButton().click()

        //start sum the values
        let sum = 0

        //get all price values, split, trim and convert to integer
        checkoutPage.getPriceValues().each(($el, index, $list) => {
        
            const amount = $el.text()
            let result = amount.split(' ')
            result = result[1].trim()
            
            //convert to integer
            sum = Number(sum) + Number(result)

        }).then(function()
        {
            cy.log(sum)
        })

        checkoutPage.getTotalValue().then(function(element)
        {

          const amount = element.text()
          let total = amount.split(' ')
          total = total[1].trim()
          
          //'total' need to be convert to integer as well!
          expect(Number(total)).to.equal(sum)

        })

        checkoutPage.checkOutButton().click()
        purchasePage.getCountry().type('ser')
        
        //custom timeout
        Cypress.config('defaultCommandTimeout', 8000)
        purchasePage.getCountryResult().click()

        //error -> is being covered by another element -> 
        //using {force: true} to disable error checking
        purchasePage.purchaseCheckbox().click({force: true})
        purchasePage.purchaseSubmitButton().click()
        
        //assertion - example 1 (not working)!
        // purchasePage.getSuccessMessage().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

        purchasePage.getSuccessMessage().then(function(element)
        {
           const actualMessage = element.text()
           expect(actualMessage.includes('Success!')).to.be.true
        })
    }
   )
 }
)