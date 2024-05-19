/// <reference types="cypress" />

describe("Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("File Download & Upload");

  });


  it("Parent Commands", () => {

    /* Parent Commands */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

  });

  
});