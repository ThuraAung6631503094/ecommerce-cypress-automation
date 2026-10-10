describe('Login Functionality', () => {

  it('AUTO-TC-001 - Login with valid credentials', () => {

    // Step 1: Open SauceDemo
    cy.visit('/')

    // Step 2: Enter username
    cy.get('[data-test="username"]').type('standard_user')

    // Step 3: Enter password
    cy.get('[data-test="password"]').type('secret_sauce')

    // Step 4: Click login
    cy.get('[data-test="login-button"]').click()

    // Step 5: Verify successful login
    cy.url().should('include', '/inventory.html')

    // Step 6: Verify Products page
    cy.get('.title').should('contain', 'Products')

  })
it('AUTO-TC-002 - Login with incorrect password', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Enter valid username
  cy.get('[data-test="username"]').type('standard_user')

  // Step 3: Enter incorrect password
  cy.get('[data-test="password"]').type('wrongpassword')

  // Step 4: Click login
  cy.get('[data-test="login-button"]').click()

  // Step 5: Verify error message
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match')

  // Step 6: Verify user remains on login page
  cy.url().should('not.include', '/inventory.html')

})
it('AUTO-TC-003 - Login with empty username', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Leave username empty

  // Step 3: Enter valid password
  cy.get('[data-test="password"]').type('secret_sauce')

  // Step 4: Click login
  cy.get('[data-test="login-button"]').click()

  // Step 5: Verify username required error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username is required')

  // Step 6: Verify user stays on login page
  cy.url().should('not.include', '/inventory.html')

})

it('AUTO-TC-004 - Login with empty password', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Enter valid username
  cy.get('[data-test="username"]').type('standard_user')

  // Step 3: Leave password empty

  // Step 4: Click login
  cy.get('[data-test="login-button"]').click()

  // Step 5: Verify password required error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Password is required')

  // Step 6: Verify user remains on login page
  cy.url().should('not.include', '/inventory.html')

})

it('AUTO-TC-005 - Login with both fields empty', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Leave username and password empty

  // Step 3: Click login
  cy.get('[data-test="login-button"]').click()

  // Step 4: Verify username required error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username is required')

  // Step 5: Verify user remains on login page
  cy.url().should('not.include', '/inventory.html')

})

it('AUTO-TC-006 - Login with locked-out user', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Enter locked-out username
  cy.get('[data-test="username"]').type('locked_out_user')

  // Step 3: Enter correct password
  cy.get('[data-test="password"]').type('secret_sauce')

  // Step 4: Click login
  cy.get('[data-test="login-button"]').click()

  // Step 5: Verify locked-out error message
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Sorry, this user has been locked out.')

  // Step 6: Verify user cannot access inventory
  cy.url().should('not.include', '/inventory.html')

})
})