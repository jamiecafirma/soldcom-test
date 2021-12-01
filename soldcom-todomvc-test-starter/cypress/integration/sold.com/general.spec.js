/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

// ----------------------------------------------------------------------------
// Custom Commands:
//   command defined in /integration/sold.com/support/commands.js
// ----------------------------------------------------------------------------

describe('SOLD.com Test Project: general', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('hides main and footer sections', () => {
    cy.get('.main').should('not.exist')

    cy.get('.footer').should('not.exist')
  })

  it ('focuses on the todo input field', () => {
    cy.focused().should('have.class', 'new-todo')
  })

  it ('clears text-input field when an item is added', () => {
    cy.get('.new-todo')
    .type('walk the dogs')
    .type('{enter}')
    .should('have.value', '')
  })
});
