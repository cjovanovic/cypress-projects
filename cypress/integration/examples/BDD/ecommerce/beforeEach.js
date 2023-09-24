beforeEach(() =>
{
        cy.fixture('example').then(function(data)
        {
        
            //runs before each and every test/scenario
            this.data = data

        })

  })