import * as React from 'react';
import { RouteComponentProps, Link } from "@reach/router"

import './landingPage.css'

const LandingPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <section className='landingPage'>
      <h1>Wheels For Days</h1>
      <p>Wheels for days allows you to create custom spinning wheels to help you choose things.</p>
      <Link to='/wheel'>Create one now!</Link>
    </section>
  )
}

export default LandingPage;
