import React, { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <CustomCursor />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;