import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Country from './Country';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Country Component', () => {
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
        status: 'succeeded',
      },
    });
  });

  it('should render loading initially', async () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/stocks/TEST']}>
          <Country />
        </MemoryRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
