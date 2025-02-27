/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it("should navigate to quiz page when submit button is clicked on", () => {
      cy.get('[data-test="submit-btn"]')
        .click()
        .url()
        .should('contain', '/quiz-gen');
  })

  it("should render the hero image", () => {
    cy.get('[data-test="hero-img"]')
      .should("be.visible")
      .invoke('attr', 'src')  //allows us to check a html element's attributes
      .should('contain', 'src/assets/logo.png')
  }) 

  it("should render the three informational columns", () => {
      cy.get('.col.s12.m4')
        .should('exist')
        .should('be.visible')
  })

  it("should render the text in the three informational columns", () => {
    cy.get('.col.s12.m4')
      .invoke('text')           //also can grab the selected element, converts to string 
      .should('not.be.empty')   //gets the string and checks for the text to not be empty
  })
})