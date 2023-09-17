import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './country.css';
import { getCountry } from '../../redux/Countries/Countries';

const Country = () => {
  const { id } = useParams();
  const country = useSelector(getCountry(id));
  let contentToDisplay = '';
  if (!country) {
    contentToDisplay = <div className="country-status">Loading...</div>;
  } else {
    contentToDisplay = (
      <div className="country-container">
        <div className="country-first">
          <div className="country-flag-container">
            <img
              className="country-flag"
              src={country?.flag}
              alt={country?.name}
            />
          </div>
          <div className="country-data">
            <h3 className="country-title">{country?.name}</h3>
            <p className="country-population">{country?.population}</p>
          </div>
        </div>
        <div className="country-details">
          <h4 className="country-details-title">Country Details</h4>
          <ul className="country-details-list">
            <li className="country-details-item">
              <div className="country-details-item-title">
                Latitude, Longitude
              </div>
              <div className="country-details-item-content">
                {`(${country.latlng[0]}, ${country?.latlng[1]})`}
              </div>
            </li>
            <li className="country-details-item">
              <div className="country-details-item-title">Total Area</div>
              <div className="country-details-item-content">
                {country?.area}
              </div>
            </li>
            <li className="country-details-item">
              <div className="country-details-item-title">Population</div>
              <div className="country-details-item-content">
                {country?.population}
              </div>
            </li>
            <li className="country-details-item">
              <div className="country-details-item-title">Capital</div>
              <div className="country-details-item-content">
                {country?.capital[0]}
              </div>
            </li>
            <li className="country-details-item">
              <div className="country-details-item-title">Region</div>
              <div className="country-details-item-content">
                {country.region}
              </div>
            </li>
            <li className="country-details-item">
              <div className="country-details-item-title">Time Zone</div>
              <div className="country-details-item-content">
                {country?.timezones[0]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className="country">{contentToDisplay}</div>;
};

export default Country;
