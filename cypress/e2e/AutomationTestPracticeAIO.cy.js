/// <reference types="cypress"/>


describe('signUp Feature', () => {
    it('signUp with valid Credentials ', () => {
        cy.visit("https://automationexercise.com/");
        cy.get("a[href='/login']").click();
        cy.get("input[placeholder='Name']").type("islam");
        //change email value every run till add data provider method
        cy.get("input[data-qa='signup-email']").type("isl2a111@gmail.com");
        cy.get("button[data-qa='signup-button']").click();
        cy.get("#id_gender1").click();
        cy.get("input[data-qa='password']").type("12121212")
        cy.get("select[data-qa='days']").select("30");
        cy.get("select[data-qa='months']").select("August");
        cy.get("select[data-qa='years']").select("1993");
        cy.get("#newsletter").check();
        cy.get("#optin").check();
        cy.get("input[data-qa^='first']").type("islam");
        cy.get("input[data-qa^='last']").type("Galal");
        cy.get("input[data-qa^='company']").type("Bonian");
        cy.get("input[data-qa='address']").type('Giza');
        cy.get("input[data-qa^='address2']").type("pyramids");
        cy.get("select[data-qa='country']").select("Canada");
        cy.get("input[data-qa='state']").type("cairo");
        cy.get("input[data-qa='city']").type("Giza");
        cy.get("input[data-qa='zipcode']").type("16588");
        cy.get("input[data-qa='mobile_number']").type("275851284");
        cy.get("button[data-qa='create-account']").click()
        cy.get("b").should("have.text" , "Account Created!")


    })
})