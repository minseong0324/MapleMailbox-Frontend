import React from 'react';
import { combineReducers } from '@reduxjs/toolkit';
import autumnTreeReducer from './autumnTree/autumnTreeSlice';

const rootReducer = combineReducers({
  autumnTree: autumnTreeReducer,
});

export default rootReducer;