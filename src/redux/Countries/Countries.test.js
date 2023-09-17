import {
  initialState,
  countriesSlice,
  getAllCountries,
  getCountriesStatus,
  getCountriesError,
  filterCountries,
} from './Countries';

describe('Redux Actions and Reducers', () => {
  it('should filter countries correctly', () => {
    const keyword = 'Germany';

    const filteredState = countriesSlice.reducer(
      initialState,
      filterCountries({ keyword }),
    );

    expect(filteredState.filteredCountries).toEqual([]);
  });
});

describe('Redux Selectors', () => {
  it('should select all countries', () => {
    const state = { countries: { countries: [{ id: 1, name: 'Country 1' }] } };
    const selectedCountries = getAllCountries(state);

    expect(selectedCountries).toEqual([{ id: 1, name: 'Country 1' }]);
  });

  it('should select countries status', () => {
    const state = { countries: { status: 'loading' } };
    const selectedStatus = getCountriesStatus(state);

    expect(selectedStatus).toEqual('loading');
  });

  it('should select countries error', () => {
    const state = { countries: { error: 'Error message' } };
    const selectedError = getCountriesError(state);

    expect(selectedError).toEqual('Error message');
  });
});
