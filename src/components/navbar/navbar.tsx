import { Link } from '@reach/router'

import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='new'>Create New</Link>
    </nav>
  )
}