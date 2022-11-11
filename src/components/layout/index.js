import React from 'react';
import Header from './header';
import Principal from './principal';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Principal/>
      <div className="max-w-screen-xl m-auto mt-12">
        {children}
      </div>
    </div>
  )
}

export default Layout
