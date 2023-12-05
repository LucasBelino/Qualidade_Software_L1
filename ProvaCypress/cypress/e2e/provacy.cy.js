describe('Testando Filmow', () => {
  beforeEach(() => {
    cy.visit('https://filmow.com/');
  });

  it('Positive Test - Check Movie Title', () => {
    cy.verificarTextoExistente('.title', 'Leo');
  });

  it('Positive Test - Check Login Button', () => {
    cy.verificarTextoExistente('.dropdown-login.not-mobile', 'Login');
  });

  it('Positive Test - Testing login button', () => {
    cy.visit('https://filmow.com/');
    cy.get('.dropdown-login.not-mobile > .dropdown-toggle').click();
    cy.verificarTextoExistente('h1', 'Login');
  })

  it('Negative Test - Checking for non-existent selection in the nav', () => {
    cy.visit('https://filmow.com/');
    cy.verificarTextoInexistente('.container', 'Desenhos');
  })
    
});
