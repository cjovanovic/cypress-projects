/// <reference types="Cypress" />

describe('My Fifth Test Suite', function()
  {
    it('My Fifth Test Case', function()
      {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>
        {
            const text = $e1.text()
            if(text.includes('Python'))
            {
                //equal the index, find next sibling and resolve the promise
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                
                {
                    const priceText = price.text()
                    expect(priceText).to.be.equal('25')
                })
            }
        })

      }
    )
  }
) 

