
describe('Shopping Cart Functionality', () => {

  it('AUTO-TC-013 - Add one product to cart', () => {

    // Step 1: Open SauceDemo
    cy.visit('/')

    // Step 2: Login with valid credentials
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Step 3: Verify inventory page
    cy.url().should('include', '/inventory.html')

    // Step 4: Add Sauce Labs Backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // Step 5: Verify cart badge shows 1
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')

    // Step 6: Open shopping cart
    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Step 7: Verify cart page opens
    cy.url().should('include', '/cart.html')

    // Step 8: Verify backpack appears in cart
    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')

    // Step 9: Verify backpack price
    cy.get('[data-test="inventory-item-price"]')
      .should('contain', '$29.99')

  })

it('AUTO-TC-014 - Add multiple products to cart', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login with valid credentials
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Add Sauce Labs Backpack
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  // Step 5: Add Sauce Labs Bike Light
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click()

  // Step 6: Verify cart badge shows 2
  cy.get('[data-test="shopping-cart-badge"]')
    .should('be.visible')
    .and('have.text', '2')

  // Step 7: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 8: Verify cart page opens
  cy.url().should('include', '/cart.html')

  // Step 9: Verify cart contains two products
  cy.get('[data-test="inventory-item"]')
    .should('have.length', 2)

  // Step 10: Verify Backpack is in cart
  cy.get('[data-test="inventory-item-name"]')
    .should('contain', 'Sauce Labs Backpack')

  // Step 11: Verify Bike Light is in cart
  cy.get('[data-test="inventory-item-name"]')
    .should('contain', 'Sauce Labs Bike Light')

})

it('AUTO-TC-015 - Remove product from cart', () => {

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

  // Step 5: Add Bike Light to cart
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click()

  // Step 6: Verify cart badge shows 2
  cy.get('[data-test="shopping-cart-badge"]')
    .should('have.text', '2')

  // Step 7: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 8: Verify two items exist
  cy.get('[data-test="inventory-item"]')
    .should('have.length', 2)

  // Step 9: Remove Bike Light
  cy.get('[data-test="remove-sauce-labs-bike-light"]')
    .click()

  // Step 10: Verify cart badge updates to 1
  cy.get('[data-test="shopping-cart-badge"]')
    .should('have.text', '1')

  // Step 11: Verify only one product remains
  cy.get('[data-test="inventory-item"]')
    .should('have.length', 1)

  // Step 12: Verify Backpack remains
  cy.get('[data-test="inventory-item-name"]')
    .should('have.text', 'Sauce Labs Backpack')

  // Step 13: Verify removed item is absent
  cy.contains(
    '[data-test="inventory-item-name"]',
    'Sauce Labs Bike Light'
  ).should('not.exist')

})

it('AUTO-TC-016 - Verify product details in shopping cart', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login with valid credentials
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Add Sauce Labs Backpack to cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  // Step 5: Open shopping cart
  cy.get('[data-test="shopping-cart-link"]')
    .click()

  // Step 6: Verify cart page
  cy.url().should('include', '/cart.html')

  // Step 7: Verify exactly one product is in cart
  cy.get('[data-test="inventory-item"]')
    .should('have.length', 1)

  // Step 8: Verify product name
  cy.get('[data-test="inventory-item-name"]')
    .should('be.visible')
    .and('have.text', 'Sauce Labs Backpack')

  // Step 9: Verify product price
  cy.get('[data-test="inventory-item-price"]')
    .should('be.visible')
    .and('have.text', '$29.99')

  // Step 10: Verify product quantity
  cy.get('[data-test="item-quantity"]')
    .should('be.visible')
    .and('have.text', '1')

  // Step 11: Verify product description
  cy.get('[data-test="inventory-item-desc"]')
    .should('be.visible')
    .and('not.be.empty')

  // Step 12: Verify Remove button
  cy.get('[data-test="remove-sauce-labs-backpack"]')
    .should('be.visible')

})

})
