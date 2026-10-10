
describe('Checkout Functionality', () => {

  it('AUTO-TC-017 - Complete successful checkout', () => {

    // Step 1: Open SauceDemo
    cy.visit('/')

    // Step 2: Login with valid credentials
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Step 3: Verify inventory page
    cy.url().should('include', '/inventory.html')

    // Step 4: Add Backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // Step 5: Verify cart badge
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1')

    // Step 6: Open shopping cart
    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Step 7: Verify cart page
    cy.url().should('include', '/cart.html')

    // Step 8: Click Checkout
    cy.get('[data-test="checkout"]').click()

    // Step 9: Verify checkout information page
    cy.url().should('include', '/checkout-step-one.html')

    // Step 10: Enter customer information
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('Customer')
    cy.get('[data-test="postalCode"]').type('57000')

    // Step 11: Click Continue
    cy.get('[data-test="continue"]').click()

    // Step 12: Verify checkout overview page
    cy.url().should('include', '/checkout-step-two.html')

    // Step 13: Verify product name and price
    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')

    cy.get('[data-test="inventory-item-price"]')
      .should('have.text', '$29.99')

    // Step 14: Verify item total
    cy.get('[data-test="subtotal-label"]')
      .should('contain', '$29.99')

    // Step 15: Click Finish
    cy.get('[data-test="finish"]').click()

    // Step 16: Verify checkout completion page
    cy.url().should('include', '/checkout-complete.html')

    // Step 17: Verify order confirmation
    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')

    // Step 18: Verify Back Home button
    cy.get('[data-test="back-to-products"]')
      .should('be.visible')

  })

it('AUTO-TC-018 - Checkout without first name', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login with valid credentials
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Add Backpack to cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  // Step 5: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 6: Click Checkout
  cy.get('[data-test="checkout"]').click()

  // Step 7: Verify checkout information page
  cy.url().should('include', '/checkout-step-one.html')

  // Step 8: Leave first name empty

  // Step 9: Enter last name
  cy.get('[data-test="lastName"]').type('Customer')

  // Step 10: Enter postal code
  cy.get('[data-test="postalCode"]').type('57000')

  // Step 11: Click Continue
  cy.get('[data-test="continue"]').click()

  // Step 12: Verify required first name error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'First Name is required')

  // Step 13: Verify user stays on information page
  cy.url().should('include', '/checkout-step-one.html')

})

it('AUTO-TC-019 - Checkout without last name', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login with valid credentials
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Add Backpack to cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  // Step 5: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 6: Click Checkout
  cy.get('[data-test="checkout"]').click()

  // Step 7: Verify checkout information page
  cy.url().should('include', '/checkout-step-one.html')

  // Step 8: Enter first name
  cy.get('[data-test="firstName"]').type('Test')

  // Step 9: Leave last name empty

  // Step 10: Enter postal code
  cy.get('[data-test="postalCode"]').type('57000')

  // Step 11: Click Continue
  cy.get('[data-test="continue"]').click()

  // Step 12: Verify last name required error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Last Name is required')

  // Step 13: Verify user stays on checkout information page
  cy.url().should('include', '/checkout-step-one.html')

})

it('AUTO-TC-020 - Checkout without postal code', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login with valid credentials
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Add Backpack to cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  // Step 5: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 6: Click Checkout
  cy.get('[data-test="checkout"]').click()

  // Step 7: Verify checkout information page
  cy.url().should('include', '/checkout-step-one.html')

  // Step 8: Enter first name
  cy.get('[data-test="firstName"]').type('Test')

  // Step 9: Enter last name
  cy.get('[data-test="lastName"]').type('Customer')

  // Step 10: Leave postal code empty

  // Step 11: Click Continue
  cy.get('[data-test="continue"]').click()

  // Step 12: Verify postal code required error
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Postal Code is required')

  // Step 13: Verify user stays on checkout information page
  cy.url().should('include', '/checkout-step-one.html')

})

})
