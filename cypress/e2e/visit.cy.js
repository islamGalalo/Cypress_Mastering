describe('Test Suite', () => {
  it('first Test  Case 1', () => {
    const baseUrl = 'https://example.cypress.io'
    cy.visit(baseUrl)
  }) 
  it('first Test  Case 2', () => {
    const baseUrl = 'https://google.com'
    cy.visit(baseUrl)
  })
})