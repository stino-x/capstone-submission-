import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Container from './components/Landing/Container';
import { UserContextProvider } from './components/ContextProvider/UserContextProvider';
import Country from './components/countries/Country';

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
