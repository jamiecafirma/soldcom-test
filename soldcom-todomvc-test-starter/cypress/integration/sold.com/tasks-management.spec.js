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

  it('unchecks todo', () => {
    cy.createDefaultTodos();

    cy.get('input.toggle').check();

    cy.get('.todo-list li')
    .eq(0)
    .find('input.toggle')
    .uncheck();

    cy.get('.todo-list li')
    .eq(0)
    .should('not.have.class', 'completed');
  });

  it('shows how many todos are left', () => {
    cy.createDefaultTodos();

    cy.get('.todo-list li')
      .eq(0)
      .find('input.toggle')
      .check();

    cy.get('.todo-count').should('have.text', '2 items left');
    });
});
