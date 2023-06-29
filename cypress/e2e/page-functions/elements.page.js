/// <reference types="cypress" />

const map = {
    elements : "#app > div > div > div.home-body > div > div:nth-child(1)",
    tb : "#item-0",
    tb_name : "#userName",
    tb_email : "#userEmail",
    tb_current_address : "#currentAddress",
    tb_permenant_address : "#permanentAddress",
    tb_submit : "#submit",
};

/**
 * Page function - Text Box
 * @param {String} urlPath
 * @param {Object} details {
 * fullName : String,
 * email ; String,
 * currentAddress : String,
 * permenantAddress : String,
 * }
 */

export function textBox(urlPath, details){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });
    cy.visit(urlPath);
    cy.wait(2000);
    cy.get(map.elements).click({force : true});
    cy.get(map.tb).click({force : true});
    cy.get(map.tb_name).type(details.fullName);
    cy.get(map.tb_email).type(details.email);
    cy.get(map.tb_current_address).type(details.currentAddress);
    cy.get(map.tb_permenant_address).type(details.permenantAddres);
    cy.get(map.tb_submit).click();
}
