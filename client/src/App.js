import React,{ Fragment } from 'react';
import Landing from '../src/components/layout/Landing';
import Navbar from '../src/components/layout/Navbar';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
