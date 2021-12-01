Cypress.Commands.add('createDefaultTodos', () => {
  cy.get('.new-todo')
    .type('say good morning to your matey')
    .type('{enter}')
    .type('swab the deck')
    .type('{enter}')
    .type('sing sea shanties')
    .type('{enter}');
});

Cypress.Commands.add('testState', () => {
  cy.get('.todo-list li')
  .should('have.length', 3);

  cy.get('.todo-list li').eq(0).should('have.text', 'say good morning to your matey');

  cy.get('.todo-list li').eq(1).should('have.text', 'swab the deck');

  cy.get('.todo-list li').eq(2).should('have.text', 'sing sea shanties');
});
