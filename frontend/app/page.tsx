// frontend/src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const TEST_QUERY = gql`
  query TestQuery {
    __typename
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  useEffect(() => {
    if (error) {
      console.error('GraphQL Error:', error);
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Connection successful!</div>;
}