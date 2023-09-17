import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Container from './Components/Landing/Container';
import { UserContextProvider } from './Components/ContextProvider/UserContextProvider';
import Country from './Components/countries/Country';

function App() {
  return (
    <UserContextProvider>
      <>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={<Container />}
          />
          <Route
            path="country/:id"
            element={<Country />}
          />
        </Routes>
      </>
    </UserContextProvider>
  );
}

export default App;
