import React, { useState, useEffect } from 'react';

const Home = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => setState(customers));
  }, []);

  return (
    <>
      <h1>{JSON.stringify(state[0])}</h1>
    </>
  );
};

export default Home;