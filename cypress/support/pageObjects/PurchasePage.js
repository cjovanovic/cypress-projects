class PurchasePage
{
    getCountry()
    {
        return cy.get('#country')
    }

    getCountryResult()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    purchaseCheckbox()
    {
        return cy.get('#checkbox2')
    }

    purchaseSubmitButton()
    {
        return cy.get('input[type="submit"]')
    }

    getSuccessMessage()
    {
       return cy.get('.alert')
    }
}

export default PurchasePage