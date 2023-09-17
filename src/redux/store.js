import { configureStore } from '@reduxjs/toolkit';
import Countriesreducer from './Countries/Countries';

export default configureStore({
  reducer: {
    countries: Countriesreducer,
  },
});
