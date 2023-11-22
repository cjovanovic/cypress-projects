/// <reference types="Cypress" />

describe('DB Suite', function()
{
    it('Database Interaction', function()
    {
        cy.sqlServer('select * from Persons').then(function(result)
        {
            // print data from first row, second column
            console.log(result[0][1])
        })
    })
})

context('DB Suite - new syntax', () =>
{
    it('Database Interaction - new syntax', () =>
    {
        cy.sqlServer('select * from Persons').then(function(result)
        {
            // print data from second row, third column
            console.log(result[1][2])
        })
    })
})