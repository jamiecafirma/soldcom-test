/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

describe('SOLD.com Test Project: persistent', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should persist todos', () => {
    cy.createDefaultTodos();

    cy.testState();

    cy.reload();

    cy.testState();
  });
});
