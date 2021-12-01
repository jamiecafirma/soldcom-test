/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

// ----------------------------------------------------------------------------
// Custom Commands:
//   command defined in /integration/sold.com/support/commands.js
// ----------------------------------------------------------------------------

describe('SOLD.com Test Project: task management', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows todos are completed', () => {
    cy.createDefaultTodos();

    cy.get('input.toggle').check();

    cy.get('.todo-list li').each((todo) => {
      expect(todo).to.have.class('completed')
    });
  });
});
