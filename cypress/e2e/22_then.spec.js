it('Then command', () => {
  cy.visit('cypress/index.html');
  cy.get('#welcome').then((hatem) => {
    cy.log(hatem);
  });
});
