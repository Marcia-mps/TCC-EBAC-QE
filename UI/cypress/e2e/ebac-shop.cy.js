describe('EBAC Shop - Testes automatizados de UI', () => {
  it('Deve visualizar o catálogo de produtos', () => {
    cy.visit('/');

    cy.get('body').should('be.visible');
    cy.url().should('include', 'lojaebac');
  });

  it('Deve acessar a página Minha Conta', () => {
    cy.visit('/minha-conta/');

    cy.get('body').should('be.visible');
    cy.url().should('include', 'minha-conta');
  });

  it('Deve validar tentativa de login com credenciais inválidas', () => {
    cy.visit('/minha-conta/');

    cy.get('#username', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('usuario_invalido@teste.com');

    cy.get('#password', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('senha_invalida{enter}');

    cy.url().should('include', 'minha-conta');
    cy.get('body').should('be.visible');
  });
});