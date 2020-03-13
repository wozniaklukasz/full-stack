import {combineReducers} from '@reduxjs/toolkit';
import appReducer from '../App/appSlice';

const rootReducer = combineReducers({
  app: appReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
