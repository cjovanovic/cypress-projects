/// <reference types="Cypress" />

describe('My 11th Test Suite', function()
{
    it('Test11-intercept-mock-response', function()
    {
        
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        
        //mock response
        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: 
                [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    }
                ]
            //use alias -> collecting promise into one variable  
            }).as('bookretrievals')
            cy.get('.btn-primary').click()
            
            //wait until cypress intercept response
            //promise will be resolved after cypress successfully send mocked data back to the browser
            cy.wait('@bookretrievals').then(function ({request, response}) 
            {
                //length of the response array = rows of the table
                cy.get('tr').should('have.length', response.body.length+1)
            })

            cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})