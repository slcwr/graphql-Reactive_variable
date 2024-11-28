"use strict";
// frontend/src/app/page.tsx
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_1 = require("react");
const client_1 = require("@apollo/client");
const client_2 = require("@apollo/client");
const TEST_QUERY = (0, client_2.gql) `
  query TestQuery {
    __typename
  }
`;
function Home() {
    const { loading, error } = (0, client_1.useQuery)(TEST_QUERY);
    (0, react_1.useEffect)(() => {
        if (error) {
            console.error('GraphQL Error:', error);
        }
    }, [error]);
    if (loading)
        return <div>Loading...</div>;
    if (error)
        return <div>Error: {error.message}</div>;
    return <div>Connection successful!</div>;
}
