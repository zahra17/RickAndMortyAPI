import { combineReducers } from '@reduxjs/toolkit';
import character from './character';
import episode from './episode';
import location from './location';

export default combineReducers({
  character,
  episode,
  location,
});
