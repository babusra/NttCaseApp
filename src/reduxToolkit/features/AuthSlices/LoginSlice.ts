import {createSlice} from '@reduxjs/toolkit';
import {UserAuth} from '../../../types/User/UserModel';

const initialState: UserAuth = {
  username: '',
  password: '',
};

const LoginSlice = createSlice({
  name: 'Login',
  initialState: {value: initialState},
  reducers: {
    usernameAction: (state, action: {payload: any; type: any}) => {
      state.value.username = action.payload;
    },
    passwordAction: (state, action: {payload: any; type: any}) => {
      state.value.password = action.payload;
    },
  },
});

export default LoginSlice.reducer;
export const {usernameAction, passwordAction} = LoginSlice.actions;
