import { Router } from '@reach/router';

import './App.css';
import Layout from './components/layouts/layout';
import LandingPage from './components/landingPage/landingPage';
import WheelPage from './components/wheels/wheelPage';

function App() {
  return (
    <Layout>
      <Router>
        <LandingPage path="/" />
        <WheelPage path="/new" />
        {/* <WheelPage path="/wheel/:wheelId" /> */}
      </Router>
    </Layout>
  );
}

export default App;
