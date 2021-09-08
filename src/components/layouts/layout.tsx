import * as React from 'react';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className='container'>
      <Navbar />
      { props.children }
      <Footer />
    </div>
  )
}

export default Layout;
