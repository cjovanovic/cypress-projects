/// <reference types="Cypress" />

describe('My Third Test Suite', function()
  {
    it('My Third Test Case', function()
      {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        //checkbox verify and multiple assertion/validation - be -> behaviour, have -> property comparing!
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //select multiple checkboxes -> find common property for all checkboxes -> oftenly combination of 'type' and 'value' array!
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown -> 'select' tagname is always used -> HTML rule!
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown (autocomplete) -> iteration with all invisible elements from the list
        cy.get('#autocomplete').type('go')
        //array iteration
        cy.get('.ui-menu-item div').each(($el, index, $list) =>
        {
          if($el.text() === "Yugoslavia")
          {

            cy.wrap($el).click()

          }
        })
        cy.get('#autocomplete').should('have.value', 'Yugoslavia')

        //visible-invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons -> can be automated with check() and click()!
        cy.get('input[value="radio2"]').check().should('be.checked')

        //window alert
        cy.on('window:alert', (str) => 
        {
          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

      }
    )
  }
) 