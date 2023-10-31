describe('Headline check on W&C website', () => {
  it('Verifies the headline on W&C site', () => {
    cy.visit('/')
    cy.get('[data-test-id="header-title-text"]').should('have.text','We solve complex problems through design & technology')
  })
})