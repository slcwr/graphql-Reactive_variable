// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable {
      mockGraphQLResponse(
        operationName: string,
        mockData: any
      ): Chainable<Element>
    }
  }