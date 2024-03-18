/// <reference types="cypress" />


describe('Takaturn - Login test cases', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.url().should('eq', Cypress.env('baseUrl'));

  })

  it('user cannot log in with incorrect username and correct password', () => {
    cy.get('header [href="/signin"]').contains('Log in').should('exist').should('be.visible').click()
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
    cy.get('#email').clear().type(Cypress.env('invalidUsername'))
    cy.get('#password').clear().type(Cypress.env('password'))
    cy.get('#login-btn').click()
    cy.get('.toast-error').contains('Email and Password not matched.').should('exist')
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
  })

  it('user cannot log in with incorrect password and correct username', () => {
    cy.get('header [href="/signin"]').contains('Log in').should('exist').should('be.visible').click()
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
    cy.get('#email').clear().type(Cypress.env('username'))
    cy.get('#password').clear().type(Cypress.env('invalidPassword'))
    cy.get('#login-btn').click()
    cy.get('.toast-error').contains('Email and Password not matched.').should('exist')
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
  })

  it('user cannot log in with empty username and password', () => {
    cy.get('header [href="/signin"]').contains('Log in').should('exist').should('be.visible').click()
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
    cy.get('#email').clear()
    cy.get('#password').clear()
    cy.get('#login-btn').click()
    cy.get('.text-error-content').eq(0).contains('Please enter the valid email address.').should('exist').should('be.visible')
    cy.get('.text-error-content').eq(1).contains('Please enter your password.').should('exist').should('be.visible')
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
  })

  it('user can successfully log in', () => {
    cy.get('header [href="/signin"]').contains('Log in').should('exist').should('be.visible').click()
    cy.get('h2').contains('Sign In').should('exist').should('be.visible')
    cy.get('#email').clear().type(Cypress.env('username'))
    cy.get('#password').clear().type(Cypress.env('password'))
    cy.get('#login-btn').click()

    cy.url().should('eq', Cypress.env('baseUrl') + 'dashboard?tab=ongoing');
    cy.contains('Welcome to Takaturn Playground!').should('exist').should('be.visible')
  })
  

})
