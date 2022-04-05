/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('EGO shoes', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1440, 1220)
    })
  it('Open url', () => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://ego.co.uk/')
  
    cy.get('#search').type('heels{enter}')
    cy.wait(1000)
//     //click on size filter
// cy.get('#narrow-by-list > div:nth-child(1) > div.filter-options-title').click()
// cy.wait(500)
// //click on size
// cy.get('#tab-1 > a:nth-child(4) > div').click()
// cy.wait(500)
//click on colour filter
cy.get('#narrow-by-list > div:nth-child(2) > div.filter-options-title').click()
cy.wait(2000)
//click on colour
cy.get('#narrow-by-list > div.filter-options-item.togglecoll.activeTog > div.filter-options-content > ol > li:nth-child(1) > input').click()
cy.wait(1000)
//clcik on product
cy.get('#layer-product-list > div.products.wrapper.grid.columns4.products-grid > ol > li:nth-child(3) > div > div.product.photo.product-item-photo > a:nth-child(1) > img').click()
cy.wait(5000)
//click on size dropdown
cy.get('#tabs-swatches > div > div.custom-select-wrapper-size > div > div.custom-select__trigger-size').click()
cy.wait(500)
//clcik on size
cy.get('#controlId-item-17').click()
cy.wait(500)
//click on add to cart button
cy.get('#product-addtocart-button').click()
cy.wait(5000)
//click on view bag
cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.minicart-wrapper._has-modal > div.modals-wrapper > aside > div.modal-inner-wrap > footer > button.view').click()
cy.wait(5000)
// //Click on size swatch
// cy.get('#cart-33808276-size').click()
// cy.wait(500)
// //click on size
// cy.get('#cart-33807802-size > option:nth-child(3)').click()
// cy.wait(500)
//click on checkout
cy.get('#maincontent > div > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button').click()
cy.wait(8000)
//click on email
cy.get('#customer-email').type('usman.ali@rltsquare.com').focus().invoke('attr', 'placeholder').should('have.text', 'Email')

cy.wait(1000)
//click on country dropdown
cy.get('#OQG7TVE').click()
cy.wait(1000)
cy.get('#YLTBQJQ').type('Test').focus().invoke('attr', 'placeholder').should('have.text', 'First Name')
cy.get('#LL81KW8').type('Test').focus().invoke('attr', 'placeholder').should('have.text', 'Last Name')
cy.get('#AS1719A').type('M320JT').focus().invoke('attr', 'placeholder').should('have.text', 'Postcode')
cy.get('#YQYM1N4').type('Unit A1,Thomas Street').focus().invoke('attr', 'placeholder').should('have.text', 'Address Line One')
// cy.get('').type('')
// cy.wait(500)
// cy.get('').type('')


})
})
})