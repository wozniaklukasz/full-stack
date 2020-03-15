import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAppState {
  language: string
}

const initialState: IAppState = {
  language: 'pl'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state: IAppState, action: PayloadAction<string>) => {
      state.language = action.payload;
    }
  }
});

export const {
  setLanguage,
} = appSlice.actions;

export default appSlice.reducer;
