/// <reference types="cypress" />

import {textBox} from "../page-functions/elements.page"

const map = {
    results : "#output",
    name : "#name",
    email : "#email",
    current_address : "#output > div > #currentAddress",
    permenant_address : "#output > div > #permanentAddress",
};

const urlPath = "https://demoqa.com";
const fullName = "Chathuri Buddhika";
const email = "chathuri.buddhi@gmail.com";
const currentAddress = "47, Abeyrathna Mw, Boralesgamuwa";
const permenantAddres = "Kalawana, Ratnapura";

describe('Demo QA app', () => {
    it('Can add calid values for all fields', () => {
        textBox(urlPath, {
            fullName : fullName,
            email : email,
            currentAddress : currentAddress,
            permenantAddres : permenantAddres,
        });

        // Assertions
        cy.get(map.results).should('exist');
        cy.get(map.name).should('have.text', "Name:" + fullName);
        cy.get(map.email).should('have.text', "Email:" + email);
        cy.get(map.current_address).should('have.text', "Current Address :" + currentAddress + " ");
        cy.get(map.permenant_address).should('have.text', "Permananet Address :" + permenantAddres);
    });
});
