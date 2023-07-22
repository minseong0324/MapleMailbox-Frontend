import React from 'react';
import { combineReducers } from '@reduxjs/toolkit';
import autumnTreeReducer from '../features/autumnTree/autumnTreeSlice';

const rootReducer = combineReducers({
  autumnTree: autumnTreeReducer,
});

export default rootReducer;