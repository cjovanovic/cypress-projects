class CheckoutPage
{
    checkOutButton()
    {
        return cy.get('.btn-success')
    }

    getPriceValues()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalValue()
    {
       return cy.get('h3 strong')
    }
}

export default CheckoutPage