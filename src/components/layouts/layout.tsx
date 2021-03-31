import React from 'react';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className='container'>
      <Navbar />
      { props.children }
      <Footer />
    </div>
  )
}