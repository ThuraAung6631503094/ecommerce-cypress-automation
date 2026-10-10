
Cypress.Commands.add('login', (
  username = 'standard_user',
  password = 'secret_sauce'
) => {

  // Open SauceDemo login page
  cy.visit('/')

  // Enter username
  cy.get('[data-test="username"]').type(username)

  // Enter password
  cy.get('[data-test="password"]').type(password)

  // Click login button
  cy.get('[data-test="login-button"]').click()

  // Verify login was successful
  cy.url().should('include', '/inventory.html')

})
