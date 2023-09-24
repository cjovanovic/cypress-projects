/// <reference types="Cypress" />

import '../../../../support/pageObjects/HomePage.js'
import HomePage from '../../../../support/pageObjects/HomePage.js'
import ProductPage from '../../../../support/pageObjects/ProductPage.js'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage.js'
import PurchasePage from '../../../../support/pageObjects/PurchasePage.js'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()
const purchasePage = new PurchasePage()

//Given I open eCommerce Page
Given('I open eCommerce Page', () =>
{
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

//When I add items to Cart 
When('I add items to Cart', function () //not work with "() =>"!!!!!
{
    homePage.getShopTab().click()  
    this.data.productName.forEach(function(element)
    {
      cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
})

//When Validate the total price
When('Validate the total price', () =>
{
    let sum = 0

    checkoutPage.getPriceValues().each(($el, index, $list) => {
        
        const amount = $el.text()
        let result = amount.split(' ')
        result = result[1].trim()
        
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
      
      expect(Number(total)).to.equal(sum)

    })
})

//Then Select country, check checkbox and verify the success message
Then('Select country, check checkbox and verify the success message', () =>
{
    checkoutPage.checkOutButton().click()
    purchasePage.getCountry().type('ser')
    
    Cypress.config('defaultCommandTimeout', 8000)
    purchasePage.getCountryResult().click()

    purchasePage.purchaseCheckbox().click({force: true})
    purchasePage.purchaseSubmitButton().click()
    
    purchasePage.getSuccessMessage().then(function(element)
    {
       const actualMessage = element.text()
       expect(actualMessage.includes('Success!')).to.be.true
    })
})

//When I fill the form details
When('I fill the form details', function(dataTable)
{
    //[name, gender][Boby, Male] from feature file!
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

//When Validate the form behaviour
When('Validate the form behaviour', function()
{
    //[name, gender] [Boby, Male]
    // homePage.getTwoWayDataBinding().should('have.value', dataTable.rawTable[1][0])
    homePage.getEditBox().should('have.attr', 'minlength', 2)
    homePage.getEntrepreneurRadio().should('be.disabled')
})

//Then Select the Shop Page
Then('Select the Shop Page', function()
{
    homePage.getShopTab().click()
})
