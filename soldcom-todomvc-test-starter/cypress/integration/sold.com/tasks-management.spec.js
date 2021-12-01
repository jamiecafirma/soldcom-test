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

  it('shows "Clear Completed" button when a todo is complete', () => {
    cy.createDefaultTodos();

    cy.get('.todo-list li')
      .eq(0)
      .find('input.toggle')
      .check();

    cy.get('.clear-completed');
    });

  it('"Clear Completed" button gets rid of completed todo', () => {
    cy.createDefaultTodos();

    cy.get('.todo-list li')
      .eq(1)
      .find('input.toggle')
      .check();

    cy.get('.clear-completed').click();

    cy.get('.todo-list li')
    .contains('swab the deck')
    .should('not.exist');
    });

  it('hides other controls while editing a todo', () => {
    cy.createDefaultTodos();

    cy.get('.todo-list li')
      .eq(0)
      .dblclick()
      .find('input.toggle')
      .should('not.be.visible')
      .siblings('.destroy')
      .should('not.be.visible');
  });

  it('highlights current filter', () => {
    cy.createDefaultTodos();

    cy.get('.filters')
    .within(() => {
      cy.get('li a')
      .eq(1)
      .as('selectedFilter')
      .click()
      .should('have.class', 'selected');
    });
  });
});
