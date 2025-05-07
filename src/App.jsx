import React, { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <CustomCursor />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;