import { GetServerSideProps } from 'next';
import React from 'react';

interface ApiData {
  title: string;
  body: string;
}

interface ApiExampleProps {
  data: ApiData | null;
  error: string | null;
}

const ApiExample: React.FC<ApiExampleProps> = ({ data, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>API Example</h1>
      <div>
        <h2>Title: {data?.title}</h2>
        <p>Body: {data?.body}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ApiExampleProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonData: ApiData = await response.json();
    return {
      props: {
        data: jsonData,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
};

export default ApiExample;
