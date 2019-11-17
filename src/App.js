import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import HomeIntro from './HomeIntro';
import dohyeon from './dohyeon.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'dohyeon';
    src: url(${dohyeon});
  }
  body {
    font-family: 'dohyeon';
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <HomeIntro />
    </Fragment>
  );
};

export default App;
