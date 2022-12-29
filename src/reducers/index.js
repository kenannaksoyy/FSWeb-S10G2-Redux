import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from "./favoriteReducer";

const comb = combineReducers({movieReducer,favoriteReducer});

export default comb;