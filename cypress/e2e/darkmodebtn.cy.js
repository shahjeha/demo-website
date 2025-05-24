describe('Theme Toggle Test', () => {
  beforeEach(() => {
    cy.visit('index.html'); // Tumhari website ka local path
  });

  it('should have light mode by default', () => {
    cy.get('body').should('not.have.class', 'dark-mode');
  });

  it('should toggle to dark mode on button click', () => {
    cy.get('#toggleButton').click();
    cy.get('body').should('have.class', 'dark-mode');
  });

  it('should toggle back to light mode on second click', () => {
    cy.get('#toggleButton').click(); // First click -> dark mode
    cy.get('#toggleButton').click(); // Second click -> light mode
    cy.get('body').should('not.have.class', 'dark-mode');
  });

  it('button text should update correctly', () => {
    cy.get('#toggleButton').click();
    cy.get('#toggleButton').should('have.text', 'Light Mode');
    cy.get('#toggleButton').click();
    cy.get('#toggleButton').should('have.text', 'Dark Mode');
  });
});
