describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "IFrames").click();
  });
  
  it('iFrames', () => {
    
  })
});