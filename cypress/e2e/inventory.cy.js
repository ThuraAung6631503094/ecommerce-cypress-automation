
describe('Product Inventory Functionality', () => {

  it('AUTO-TC-007 - Verify inventory page loads successfully', () => {

    // Step 1: Open SauceDemo
   cy.login()

    // Step 3: Verify inventory page URL
    cy.url().should('include', '/inventory.html')

    // Step 4: Verify Products heading
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('contain', 'Products')

    // Step 5: Verify product list is displayed
    cy.get('[data-test="inventory-list"]')
      .should('be.visible')

    // Step 6: Verify there are 6 products
    cy.get('[data-test="inventory-item"]')
      .should('have.length', 6)

  })

it('AUTO-TC-008 - Verify product names are displayed correctly', () => {

  // Step 1: Open SauceDemo
  cy.visit('/')

  // Step 2: Login
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Define expected product names
  const expectedProducts = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ]

  // Step 5: Verify all six product names
  cy.get('[data-test="inventory-item-name"]')
    .should('have.length', 6)
    .each(($product, index) => {
      expect($product.text()).to.equal(expectedProducts[index])
    })

})

it('AUTO-TC-009 - Verify product prices are displayed correctly', () => {

  // Step 1: Open SauceDemo
 cy.login()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Define expected prices for all six products
  const expectedPrices = {
    'Sauce Labs Backpack': '$29.99',
    'Sauce Labs Bike Light': '$9.99',
    'Sauce Labs Bolt T-Shirt': '$15.99',
    'Sauce Labs Fleece Jacket': '$49.99',
    'Sauce Labs Onesie': '$7.99',
    'Test.allTheThings() T-Shirt (Red)': '$15.99'
  }

  // Step 5: Verify there are six products
  cy.get('[data-test="inventory-item"]')
    .should('have.length', 6)

  // Step 6: Verify the price of each product
  cy.get('[data-test="inventory-item"]').each(($item) => {

    const productName = $item
      .find('[data-test="inventory-item-name"]')
      .text()
      .trim()

    const actualPrice = $item
      .find('[data-test="inventory-item-price"]')
      .text()
      .trim()

    expect(actualPrice).to.equal(expectedPrices[productName])

  })

})

it('AUTO-TC-010 - Sort products by price low to high', () => {

  // Step 1: Open SauceDemo
  cy.login()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Select Price (low to high)
  cy.get('[data-test="product-sort-container"]')
    .select('lohi')

  // Step 5: Check that the prices are sorted
  cy.get('[data-test="inventory-item-price"]')
    .should('have.length', 6)
    .then(($prices) => {

      // Convert displayed prices into numbers
      const actualPrices = [...$prices].map((price) =>
        Number(price.innerText.replace('$', ''))
      )

      // Sort a copy of the prices from low to high
      const expectedPrices = [...actualPrices]
        .sort((a, b) => a - b)

      // Compare actual order with expected order
      expect(actualPrices).to.deep.equal(expectedPrices)

    })

})

it('AUTO-TC-011 - Sort products by price high to low', () => {

  // Step 1: Open SauceDemo
  cy.login()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Select Price (high to low)
  cy.get('[data-test="product-sort-container"]')
    .select('hilo')

  // Step 5: Verify all six prices are sorted
  cy.get('[data-test="inventory-item-price"]')
    .should('have.length', 6)
    .then(($prices) => {

      // Convert prices from text to numbers
      const actualPrices = [...$prices].map((price) =>
        Number(price.innerText.replace('$', ''))
      )

      // Sort a copy from highest to lowest
      const expectedPrices = [...actualPrices]
        .sort((a, b) => b - a)

      // Compare actual order with expected order
      expect(actualPrices).to.deep.equal(expectedPrices)

    })

})

it('AUTO-TC-012 - Verify product details page', () => {

  // Step 1: Open SauceDemo
  cy.login()

  // Step 3: Verify inventory page
  cy.url().should('include', '/inventory.html')

  // Step 4: Open Sauce Labs Backpack
  cy.get('[data-test="inventory-item-name"]')
    .contains('Sauce Labs Backpack')
    .click()

  // Step 5: Verify product details page opens
  cy.url().should('include', '/inventory-item.html')

  // Step 6: Verify product name
  cy.get('[data-test="inventory-item-name"]')
    .should('be.visible')
    .and('have.text', 'Sauce Labs Backpack')

  // Step 7: Verify product price
  cy.get('[data-test="inventory-item-price"]')
    .should('be.visible')
    .and('have.text', '$29.99')

  // Step 8: Verify product description exists
  cy.get('[data-test="inventory-item-desc"]')
    .should('be.visible')
    .and('not.be.empty')

  // Step 9: Verify Back to products button
  cy.get('[data-test="back-to-products"]')
    .should('be.visible')

})

})
