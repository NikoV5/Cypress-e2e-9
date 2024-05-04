
/// <reference types="cypress" />

// This is describe test block that holds group of tests
describe("My First Tests", () => {
    it("Visit TechGlobal trainnig app home page", () => {
  
      cy.visit('https://www.techglobal-training.com');

      cy.reload() // command to refresh your current url

      cy.visit('https://www.techglobal-training.com/frontend');

      // Navigate back on the web page
      // cy.go('back')
      // or
      cy.go(-1);


      // Navigate forward on the web page
      // cy.go('forward')
      // or 
      cy.go(1);
      


      cy.go(-1);

      cy.title().should('equal', 'TechGlobal Training | Home')

      cy.url().should('contains', 'techglobal-training')

      });

      it("My Myrst Test", () => {

        // expect(true).to.equal(false)

        // cy.log(true === true)

        cy.visit('https://www.techglobal-training.com/frontend/html-elements')

        cy.get('#logo').click().should('be.visible');

        // cy.get('#logo').should('be.visible')
        


      });
  });