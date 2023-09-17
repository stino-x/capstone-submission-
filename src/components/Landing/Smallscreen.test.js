import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from '../ContextProvider/UserContextProvider';
import Smallerscreen from './Smallerscreen';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('Container Component', () => {
  let store;
  const mockStore = configureStore([]);

  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [
          {
            id: 1,
            name: 'Country 1',
            flag: 'https://example.com/flag.png',
            population: 1000000,
            latlng: [12.34, 56.78],
            area: 12345,
            capital: 'Capital City',
            region: 'Region Name',
            timezones: ['Timezone 1'],
          },
        ],
        filteredCountries: [],
        status: 'succeeded',
      },
    });
  });

  it('should render correctly', () => {
    const contextValue = {
      inputCountry: 'TestCountry',
      setInputCountry: jest.fn(),
    };

    const tree = render(
      <Provider store={store}>
        <UserContextProvider value={contextValue}>
          <Router>
            <Smallerscreen />
          </Router>
        </UserContextProvider>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
