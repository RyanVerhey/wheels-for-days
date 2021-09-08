import * as React from 'react';
import { Link } from '@reach/router'

import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='new'>Create New</Link>
    </nav>
  )
}

export default Navbar;
