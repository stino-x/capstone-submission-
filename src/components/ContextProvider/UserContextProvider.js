import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [inputCountry, setInputCountry] = useState('');

  const contextValue = {
    inputCountry,
    setInputCountry,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useSharedContextforSlice = () => {
  useContext(UserContext);
};

export { UserContextProvider, useSharedContextforSlice, UserContext };
