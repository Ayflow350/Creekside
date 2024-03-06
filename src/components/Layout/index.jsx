import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

function Layout({ pathname }) {
  // Function to set header color based on pathname

  console.log(pathname); // Corrected log statement

  const getHeaderColor = () => {
    if (pathname === '/') {
      return 'transparent';
    } else {
      return '#ffff';
    }
  };

  // Get header color
  const headerColor = getHeaderColor();

  return (
   <>
     <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
     <div style={{ height: '90px'}}>

     </div>
     <Outlet />
     <Footer />
   </>
  );
}

export default Layout;

