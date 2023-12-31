class HomePage
{

    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender()
    {
        return cy.get('select') //add a 'return' statement for each and every method!
    }

    getEntrepreneurRadio()
    {
        return cy.get('#inlineRadio3')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

//export the class
export default HomePage;