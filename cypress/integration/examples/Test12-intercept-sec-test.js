/// <reference types="Cypress" />

describe('My 12th Test Suite', function()
{
    it('Test12-intercept-sec-test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>
        {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue(
                (res) =>
                {
                    //missing security -> should work in regular conditions
                    //expect(res.statusCode).to.equal(403) 
                }
            )

        }).as('dummyUrl')
        cy.get('.btn-primary').click()
        cy.wait('@dummyUrl')
    })
})