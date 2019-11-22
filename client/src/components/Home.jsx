import React, { useState, useEffect } from 'react';

const Home = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        console.log(res);
        setState(res)
      });
  }, []);

  return (
    <>
      <h1>{JSON.stringify(state[0])}</h1>
    </>
  );
};

export default Home;