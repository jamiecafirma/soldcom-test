Cypress.Commands.add('createDefaultTodos', () => {
  cy.get('.new-todo')
    .type('say good morning to your matey')
    .type('{enter}')
    .type('swab the deck')
    .type('{enter}')
    .type('sing sea shanties')
    .type('{enter}')
})
