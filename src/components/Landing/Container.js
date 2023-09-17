import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import EuropeImage from '../images/Europe_unnamed_colour.jpg';

import Smallerscreen from './Smallerscreen';
import { UserContext } from '../ContextProvider/UserContextProvider';
import { filterCountries } from '../../redux/Countries/Countries';

import './Container.css';

const RocketContainer = () => {
  const { inputCountry, setInputCountry } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const keyword = event.target.value;
    setInputCountry(keyword);
    dispatch(filterCountries({ keyword }));
  };

  return (
    <>
      <div className="top-container">
        <img
          className="top-container-img"
          src={EuropeImage}
          alt="Location Map"
        />

        <span className="top-container-title">Europe</span>
      </div>
      <div className="contaner custom-container">
        <div className="menu-header">
          <div className="page-divider">
            <span>Search Country by name</span>
            <input
              placeholder="Enter country code"
              value={inputCountry}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Smallerscreen />
      </div>
    </>
  );
};

export default RocketContainer;
