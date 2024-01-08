/// <reference types="cypress"/>


describe('signUp Feature', () => {
    it ('signUp with valid Credentials ' , () =>   {
        cy.visit("https://automationexercise.com/");
        cy.get("a[href='/login']").click();
        cy.get("input[placeholder='Name']").type("islam");
        cy.get("input[data-qa='signup-email']").type("isla@gmail.com");
        cy.get("button[data-qa='signup-button']").click();




 })
})