"use strict";
// cypress/support/commands.ts
Cypress.Commands.add('mockGraphQLResponse', (operationName, mockData) => {
    cy.intercept('POST', Cypress.env('apiUrl'), (req) => {
        if (req.body.operationName === operationName) {
            req.reply({
                data: mockData
            });
        }
    });
});
