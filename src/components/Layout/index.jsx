import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
 

  


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

