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
});
