import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  hasRequested: false,
};

const RequestSlice = createSlice({
  name: 'request',
  initialState: {value: initialState},
  reducers: {
    setHasRequested: (state, action) => {
      state.value.hasRequested = action.payload;
    },
  },
});

export default RequestSlice.reducer;
export const {setHasRequested} = RequestSlice.actions;
