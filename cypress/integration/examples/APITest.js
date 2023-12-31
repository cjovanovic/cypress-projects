/// <reference types="Cypress" />

describe('My 1st API Test Suite', function()
{
    it('My 1st API Test', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', 
        
        {
            "name":"Learn Cypress Automation with Mocha",
            "isbn":"alex",
            "aisle":"345",
            "author":"Alex Jov"
        }).then(function(response)
        {
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.eq(200)
        })
    })
})