/// <reference types="Cypress" />

const neatCsv = require('neat-csv')
//import neatCsv from 'neat-csv';

let productName
let invoiceNumber

describe('My 1st Session Test Suite', function()
{
    it('will logged in user through local storage', async function()
    {
        //calling command from commands.js
        cy.loginAPI().then(function()
            {
                //visit with custom options -> adding js event
                cy.visit('https://rahulshettyacademy.com/client',
                
                //adding js event
                {
                    onBeforeLoad: function(window)
                    {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
            })

        cy.get('.card-body button:last-of-type').eq(2).click()
        cy.get('[routerlink*="cart"]').click()
        cy.get('.btn-danger').click()
        cy.get('h1').eq(1).should('have.text', 'No Products in Your Cart !')
        cy.contains('HOME').click()
        cy.get('.card-body b').eq(1).then(function (element)
        {
          productName = element.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click({force: true})
        cy.contains('Checkout').click()
        // cy.get('select:first-of-type').select('9').click()
        // cy.get('select:last-of-type').select('option19').click()
        cy.get('input').eq(2).type('123')
        cy.get('input').eq(3).type('Aleksandar Jovanovic')
        cy.get('[placeholder*="Country"]').type('se')
        cy.get('.ta-results button').each(($el, index, $list) =>
        {
            if($el.text() === ' Senegal')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('label.ng-star-inserted').then(function(element)
        {
           let result = element.text()
           let cleanedResult = result.split(' ')
           invoiceNumber = cleanedResult[2].split(' ')
           invoiceNumber = invoiceNumber[0].trim()

        })
        cy.get('.order-summary button').contains('CSV').click()
        //cy.get('.order-summary button').contains('Excel').click()
        
        cy.wait(2000)
        cy.readFile(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_m.tatatu.test.csv').
        then(async (text) =>
        {
            //convert to js object
            //await -> another way to resolve the promise
            const csv = await neatCsv(text) //be aware that async and await always comes together!

            //print js object
            console.log(csv)

            //get property value from csv file -> in case if value has spacing always use middle brackets instead of dot!
            const actualProduct = csv[0] ['Product Name']
            const actualInvoiceNum = csv[0] ['Invoice Number']   
            expect(productName).to.be.equal(actualProduct)
            expect(invoiceNumber).to.be.equal(actualInvoiceNum)
        })
        
        

    })
})