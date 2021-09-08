import * as React from 'react';
import { Router } from '@reach/router';

import './App.css';
import Layout from './components/layouts/layout';
import LandingPage from './components/landingPage/landingPage';
import WheelPage from './components/wheels/wheelPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <LandingPage path="/" />
        <WheelPage path="/wheel" />
        {/* <WheelPage path="/wheel/:wheelId" /> */}
      </Router>
    </Layout>
  );
}

export default App;
