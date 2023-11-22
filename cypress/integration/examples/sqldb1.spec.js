/// <reference types="Cypress" />

context('DB Suite 1', () =>
{
    let data
    beforeEach(() =>
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.sqlServer('select * from Persons').then(function(result)
        {
            data = result
        })

    })

    it('Input files from db', () =>
    {
        cy.get('input[name="name"]:nth-child(2)').type(data[1][2] + ' ' + data[1][1])
    })
})