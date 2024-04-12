import { GetServerSideProps } from 'next';
import React from 'react';

const ApiExample: React.FC<{ data: any; error: string | null }> = ({ data, error }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonData = await response.json();
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
        error: error.message,
      },
    };
  }
};

export default ApiExample;
