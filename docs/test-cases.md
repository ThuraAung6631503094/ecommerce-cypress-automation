# E-Commerce Cypress Automation — Test Cases

**Project:** E-Commerce Web Automation Testing Using Cypress  
**Application Under Test:** Swag Labs (SauceDemo)  
**Application URL:** https://www.saucedemo.com/  
**Framework:** Cypress  
**Programming Language:** JavaScript  
**Document Version:** 1.0  
**Total Automated Test Cases:** 20

---

## 1. Overview

This document describes the automated functional test cases implemented for the SauceDemo e-commerce application.

The test suite consists of 20 automated test cases organized into four modules:

| Module | Test IDs | Number of Tests |
|---|---|---:|
| Login | AUTO-TC-001 to AUTO-TC-006 | 6 |
| Product Inventory | AUTO-TC-007 to AUTO-TC-012 | 6 |
| Shopping Cart | AUTO-TC-013 to AUTO-TC-016 | 4 |
| Checkout | AUTO-TC-017 to AUTO-TC-020 | 4 |
| **Total** | | **20** |

Each test case is implemented using Cypress and includes assertions to verify the application's actual behavior against the expected result.

---

## 2. Module 1 — Login Functionality

**Specification File:** `cypress/e2e/login.cy.js`

### AUTO-TC-001 — Login with Valid Credentials

**Test Type:** Positive  
**Precondition:** User is on the SauceDemo login page.

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

**Test Steps:**
1. Open SauceDemo.
2. Enter the valid username.
3. Enter the valid password.
4. Click the Login button.
5. Verify the destination page.

**Expected Result:** User successfully navigates to `/inventory.html`, and the Products heading is displayed.

### AUTO-TC-002 — Login with Incorrect Password

**Test Type:** Negative

**Test Data:**
- Username: `standard_user`
- Password: `wrongpassword`

**Test Steps:**
1. Open the login page.
2. Enter the valid username.
3. Enter an incorrect password.
4. Click Login.
5. Verify the error message.

**Expected Result:** The application displays an error indicating that the username and password do not match, and the user cannot access the inventory page.

### AUTO-TC-003 — Login with Empty Username

**Test Type:** Negative

**Test Data:**
- Username: Empty
- Password: `secret_sauce`

**Test Steps:**
1. Open the login page.
2. Leave the username empty.
3. Enter the valid password.
4. Click Login.
5. Verify the validation message.

**Expected Result:** The application displays "Username is required" and prevents login.

### AUTO-TC-004 — Login with Empty Password

**Test Type:** Negative

**Test Data:**
- Username: `standard_user`
- Password: Empty

**Test Steps:**
1. Open the login page.
2. Enter a valid username.
3. Leave the password empty.
4. Click Login.
5. Verify the validation message.

**Expected Result:** The application displays "Password is required" and prevents login.

### AUTO-TC-005 — Login with Both Fields Empty

**Test Type:** Negative

**Test Data:**
- Username: Empty
- Password: Empty

**Test Steps:**
1. Open the login page.
2. Leave both credential fields empty.
3. Click Login.
4. Verify the validation message.

**Expected Result:** The application displays "Username is required" and prevents login.

### AUTO-TC-006 — Login with Locked-Out User

**Test Type:** Negative

**Test Data:**
- Username: `locked_out_user`
- Password: `secret_sauce`

**Test Steps:**
1. Open the login page.
2. Enter the locked-out account credentials.
3. Click Login.
4. Verify the account restriction message.

**Expected Result:** The application displays "Sorry, this user has been locked out." and prevents access to the inventory page.

---

## 3. Module 2 — Product Inventory

**Specification File:** `cypress/e2e/inventory.cy.js`

**Precondition:** User is successfully logged in with the standard demonstration account.

### AUTO-TC-007 — Verify Inventory Page Loads Successfully

**Test Type:** Positive

**Test Steps:**
1. Log in using valid credentials.
2. Verify the inventory page URL.
3. Verify the Products heading.
4. Verify the inventory list is visible.
5. Count the displayed products.

**Expected Result:** The inventory page loads successfully and displays six product entries.

### AUTO-TC-008 — Verify Product Names

**Test Type:** Positive

**Expected Product Names:**
- Sauce Labs Backpack
- Sauce Labs Bike Light
- Sauce Labs Bolt T-Shirt
- Sauce Labs Fleece Jacket
- Sauce Labs Onesie
- Test.allTheThings() T-Shirt (Red)

**Test Steps:**
1. Log in to SauceDemo.
2. Open the inventory page.
3. Retrieve the displayed product names.
4. Compare the names against the expected product list.

**Expected Result:** All six expected products are displayed in the expected default order.

### AUTO-TC-009 — Verify Product Prices

**Test Type:** Positive

| Product | Expected Price |
|---|---:|
| Sauce Labs Backpack | $29.99 |
| Sauce Labs Bike Light | $9.99 |
| Sauce Labs Bolt T-Shirt | $15.99 |
| Sauce Labs Fleece Jacket | $49.99 |
| Sauce Labs Onesie | $7.99 |
| Test.allTheThings() T-Shirt (Red) | $15.99 |

**Test Steps:**
1. Log in to SauceDemo.
2. Retrieve the six product entries.
3. Extract each product name and displayed price.
4. Compare each price with the corresponding expected value.

**Expected Result:** All six products display their expected prices.

### AUTO-TC-010 — Sort Products by Price Low to High

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Select Price (low to high) from the sorting dropdown.
3. Retrieve all displayed product prices.
4. Convert the price values to numbers.
5. Verify that the prices are in ascending order.

**Expected Result:** Products are sorted from the lowest price ($7.99) to the highest price ($49.99).

### AUTO-TC-011 — Sort Products by Price High to Low

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Select Price (high to low).
3. Retrieve the displayed prices.
4. Convert the price values to numbers.
5. Verify that the prices are in descending order.

**Expected Result:** Products are sorted from the highest price ($49.99) to the lowest price ($7.99).

### AUTO-TC-012 — Verify Product Details Page

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Click Sauce Labs Backpack.
3. Verify navigation to the product details page.
4. Verify the product name.
5. Verify the product price.
6. Verify that a description is displayed.
7. Verify the Back to products button is visible.

**Expected Result:** The product details page displays Sauce Labs Backpack, its price of $29.99, a non-empty description, and a navigation button.

---

## 4. Module 3 — Shopping Cart

**Specification File:** `cypress/e2e/cart.cy.js`

**Precondition:** User is logged in and can access the inventory page.

### AUTO-TC-013 — Add One Product to Cart

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Add Sauce Labs Backpack to the cart.
3. Verify the cart badge displays 1.
4. Open the shopping cart.
5. Verify the product name and price.

**Expected Result:** The shopping cart contains Sauce Labs Backpack with the correct price of $29.99.

### AUTO-TC-014 — Add Multiple Products to Cart

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Add Sauce Labs Backpack.
3. Add Sauce Labs Bike Light.
4. Verify the cart badge displays 2.
5. Open the cart.
6. Verify both products are present.

**Expected Result:** The shopping cart contains exactly two products: Sauce Labs Backpack and Sauce Labs Bike Light.

### AUTO-TC-015 — Remove Product from Cart

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Add Sauce Labs Backpack and Sauce Labs Bike Light.
3. Open the shopping cart.
4. Verify two products are displayed.
5. Remove Sauce Labs Bike Light.
6. Verify the cart badge changes to 1.
7. Verify the removed product is absent.
8. Verify Sauce Labs Backpack remains.

**Expected Result:** Bike Light is removed, the cart contains one product, and the remaining item is Sauce Labs Backpack.

### AUTO-TC-016 — Verify Product Details in Shopping Cart

**Test Type:** Positive

**Test Steps:**
1. Log in to SauceDemo.
2. Add Sauce Labs Backpack.
3. Open the shopping cart.
4. Verify the product name.
5. Verify its price.
6. Verify the displayed quantity.
7. Verify the description is present.
8. Verify the Remove button is displayed.

**Expected Result:** The cart displays Sauce Labs Backpack with price $29.99, quantity 1, a visible non-empty description, and a Remove button.

---

## 5. Module 4 — Checkout Functionality

**Specification File:** `cypress/e2e/checkout.cy.js`

**Precondition:** User is logged in and has added Sauce Labs Backpack to the shopping cart.

### AUTO-TC-017 — Complete Successful Checkout

**Test Type:** Positive / End-to-End

**Test Data:**
- First Name: Test
- Last Name: Customer
- Postal Code: 57000

**Test Steps:**
1. Log in to SauceDemo.
2. Add Sauce Labs Backpack.
3. Open the shopping cart.
4. Click Checkout.
5. Enter valid customer information.
6. Click Continue.
7. Verify the checkout overview page.
8. Verify the product name and price.
9. Verify the subtotal is $29.99.
10. Click Finish.
11. Verify the order confirmation page.

**Expected Result:** The checkout completes successfully, and the application displays "Thank you for your order!"

### AUTO-TC-018 — Checkout Without First Name

**Test Type:** Negative

**Test Data:**
- First Name: Empty
- Last Name: Customer
- Postal Code: 57000

**Test Steps:**
1. Log in and add a product.
2. Navigate to checkout.
3. Leave First Name empty.
4. Enter Last Name and Postal Code.
5. Click Continue.
6. Verify the validation message.

**Expected Result:** The application displays "First Name is required" and remains on the checkout information page.

### AUTO-TC-019 — Checkout Without Last Name

**Test Type:** Negative

**Test Data:**
- First Name: Test
- Last Name: Empty
- Postal Code: 57000

**Test Steps:**
1. Log in and add a product.
2. Navigate to checkout.
3. Enter First Name.
4. Leave Last Name empty.
5. Enter Postal Code.
6. Click Continue.
7. Verify the validation message.

**Expected Result:** The application displays "Last Name is required" and remains on the checkout information page.

### AUTO-TC-020 — Checkout Without Postal Code

**Test Type:** Negative

**Test Data:**
- First Name: Test
- Last Name: Customer
- Postal Code: Empty

**Test Steps:**
1. Log in and add a product.
2. Navigate to checkout.
3. Enter First Name and Last Name.
4. Leave Postal Code empty.
5. Click Continue.
6. Verify the validation message.

**Expected Result:** The application displays "Postal Code is required" and remains on the checkout information page.

---

## 6. Test Execution

The complete suite can be executed locally using:

```powershell
npx cypress run --browser chrome
```

For interactive execution:

```powershell
npx cypress open
```

The test cases are also configured for execution through GitHub Actions.

## 7. Traceability and Evidence

Test case IDs are included in Cypress test titles to connect the documentation with the corresponding automated scripts.

Execution evidence is organized in the repository's `evidence/` folder, including individual module results, full regression results, and CI workflow evidence.

The actual execution outcomes are documented separately in `docs/execution-summary.md`.

## 8. Conclusion

This document defines the 20 automated functional test cases covering the key user journeys of the SauceDemo e-commerce application.

The test suite demonstrates positive testing, negative testing, validation checks, UI assertions, cart operations, product sorting, and end-to-end checkout verification using Cypress and JavaScript.