
Cypress.Commands.add('login', (
  username,
  password
) => {

  cy.fixture('users').then((users) => {

    const loginUsername = username ?? users.validUser.username
    const loginPassword = password ?? users.validUser.password

    cy.visit('/')

    cy.get('[data-test="username"]')
      .type(loginUsername)

    cy.get('[data-test="password"]')
      .type(loginPassword)

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', '/inventory.html')

  })

})
