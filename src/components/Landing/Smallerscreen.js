import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Smallerscreen.css';

import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  fetchCountries,
  getCountriesStatus,
} from '../../redux/Countries/Countries';

const Smallerscreen = () => {
  const countries = useSelector((state) => state.countries.countries);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries,
  );
  const dispatch = useDispatch();

  const countriesStatus = useSelector(getCountriesStatus);

  useEffect(() => {
    if (countriesStatus === 'idle') {
      dispatch(fetchCountries('europe'));
    }
  }, [countriesStatus, dispatch]);
  return (
    <div id="cell-grid">
      {filteredCountries.length > 0
        ? filteredCountries.map((item) => (
          <Link
            className="links"
            to={`country/${item.id}`}
            onClick={() => {
              localStorage.setItem(
                'countrytodisplayinsecondpage',
                JSON.stringify({
                  countryname: item.countryname,
                  countrycode: item.countrycode,
                }),
              );
            }}
            key={item.id}
          >
            <div
              className="cell"
              key={item.id}
            >
              <div className="map">
                <BsArrowRightCircle className="arrow" />
              </div>
              <div className="flag-container">
                <img
                  className="flag"
                  src={item.flag}
                  alt="flag"
                />
              </div>
              <div className="country-name">
                <div>{item.name}</div>
                <div>{item.population}</div>
              </div>
            </div>
          </Link>
        ))
        : countries.map((item) => (
          <Link
            className="links"
            to={`country/${item.id}`}
            onClick={() => {
              localStorage.setItem(
                'countrytodisplayinsecondpage',
                JSON.stringify({
                  countryname: item.countryname,
                  countrycode: item.countrycode,
                }),
              );
            }}
            key={item.id}
          >
            <div
              className="cell"
              key={item.id}
            >
              <div className="map">
                <BsArrowRightCircle className="arrow" />
              </div>
              <div className="flag-container">
                <img
                  className="flag"
                  src={item.flag}
                  alt="flag"
                />
              </div>
              <div className="country-name">
                <div>{item.name}</div>
                <div>{item.population}</div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Smallerscreen;
