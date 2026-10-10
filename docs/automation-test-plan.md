# E-Commerce Web Automation Testing — Test Plan

**Project:** E-Commerce Web Automation Testing Using Cypress  
**Application Under Test:** Swag Labs (SauceDemo)  
**Website:** https://www.saucedemo.com/  
**Test Framework:** Cypress  
**Programming Language:** JavaScript  
**Test Environment:** Google Chrome, Windows (local execution), Ubuntu (GitHub Actions)  
**Document Version:** 1.0  
**Test Plan Status:** Functional automation implemented

---

## 1. Introduction

This document defines the objectives, scope, testing approach, environment, and expected deliverables for the E-Commerce Web Automation Testing project.

The project focuses on validating critical user workflows of the SauceDemo e-commerce application through automated end-to-end testing using Cypress and JavaScript.

The automation suite is designed to support repeatable functional regression testing, reduce repetitive manual execution, and identify unexpected changes in application behavior.

## 2. Test Objectives

The main objectives are to:

- Verify that valid users can log in successfully.
- Validate error messages for invalid and incomplete login credentials.
- Verify that the product inventory displays the expected products and prices.
- Validate product sorting functionality.
- Verify navigation to product details.
- Confirm that products can be added to and removed from the shopping cart.
- Verify shopping cart quantities and product information.
- Validate the complete checkout process.
- Verify checkout form validation messages.
- Execute all automated tests as a regression suite.
- Integrate the automation suite with GitHub Actions for continuous integration.

## 3. Scope of Testing

### In Scope

The automation testing project covers four main functional modules.

**Module 1 — Login Functionality**

- Successful login
- Incorrect password
- Empty username
- Empty password
- Empty credentials
- Locked-out user

**Module 2 — Product Inventory**

- Inventory page loading
- Product name verification
- Product price verification
- Price sorting: low to high
- Price sorting: high to low
- Product details verification

**Module 3 — Shopping Cart**

- Adding one product
- Adding multiple products
- Removing products
- Verifying product information in the cart

**Module 4 — Checkout**

- Successful checkout
- Missing first name validation
- Missing last name validation
- Missing postal code validation

### Out of Scope

The following areas are not included in the current automation scope:

- Performance and load testing
- Security and penetration testing
- Accessibility auditing
- Mobile application testing
- Cross-browser compatibility testing
- Backend API testing
- Real payment processing
- Database validation

## 4. Testing Approach

The project uses automated end-to-end functional testing.

Each test executes predefined browser actions and uses Cypress assertions to compare actual application behavior against expected outcomes.

Testing includes both positive and negative scenarios.

**Positive Testing:** Verifies that valid user actions produce successful results.

**Negative Testing:** Verifies that invalid or incomplete information is handled appropriately.

**Regression Testing:** Executes the complete automation suite to confirm that previously tested functionality continues to behave as expected.

Tests are organized by functional module to improve readability and maintenance.

## 5. Tools and Technologies

| Tool | Purpose |
|---|---|
| Cypress | End-to-end browser automation |
| JavaScript | Automated test scripting |
| Node.js | JavaScript runtime |
| npm | Dependency management |
| Visual Studio Code | Development environment |
| Google Chrome | Browser testing |
| Git | Source code version control |
| GitHub | Repository hosting |
| GitHub Actions | Continuous integration |

## 6. Test Environment

**Local Environment**

- Operating System: Windows
- Development Environment: Visual Studio Code
- Browser: Google Chrome
- Application: SauceDemo public demonstration website
- Automation Framework: Cypress

**CI Environment**

- Platform: GitHub Actions
- Runner: Ubuntu 24.04
- Browser: Google Chrome
- Node.js: Version 22

The project uses publicly available demonstration accounts provided by SauceDemo.

## 7. Test Case Organization

Automated test cases follow the naming convention:

`AUTO-TC-XXX`

Examples:

- AUTO-TC-001 — Valid Login
- AUTO-TC-007 — Inventory Page Verification
- AUTO-TC-013 — Add Product to Cart
- AUTO-TC-017 — Successful Checkout

Test scripts are organized into four specification files:

- `login.cy.js`
- `inventory.cy.js`
- `cart.cy.js`
- `checkout.cy.js`

The planned automation suite consists of 20 test cases.

## 8. Entry Criteria

Automation execution requires:

- The application under test is accessible.
- The necessary demonstration accounts are available.
- Cypress and required dependencies are installed.
- Test scripts and test data are prepared.
- Google Chrome is available in the testing environment.

## 9. Exit Criteria

The functional automation milestone is considered complete when:

- All 20 planned test cases are implemented.
- All test cases are executed.
- No test failures remain in the final regression run.
- Execution results are documented.
- Evidence of test execution is captured.
- The GitHub Actions workflow executes successfully.

## 10. Test Deliverables

The expected deliverables include:

1. Cypress automation source code
2. Test data fixtures
3. Reusable custom Cypress commands
4. Automation test plan
5. Automated test case documentation
6. Test execution summary
7. Test execution evidence
8. GitHub Actions CI/CD workflow
9. Professional project README

## 11. Risks and Limitations

The project uses a publicly accessible demonstration application. Changes to the website, product data, selectors, or availability may affect automated test execution.

The current automated tests cover selected functional scenarios and do not represent complete testing of the application.

Successful execution indicates that the implemented assertions passed in the tested environment. It does not guarantee that the application is entirely free of defects.

## 12. Conclusion

The E-Commerce Web Automation Testing project demonstrates the implementation of structured automated functional testing using Cypress and JavaScript.

By covering login, product inventory, shopping cart, and checkout functionality, the project provides practical experience with test automation, assertions, reusable test commands, test data management, regression testing, version control, and continuous integration.