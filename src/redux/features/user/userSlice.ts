import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ILogin {
  token: string;
  _id: string;
}

const initialState: ILogin = {
  token: "",
  _id: "",
};

interface ILoginResponse {
  accessToken: string;
  _id: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state, action: PayloadAction<ILoginResponse>) => {
      state.token = action.payload.accessToken;
      state._id = action.payload._id;
    },
    userLogout: (state) => {
      state.token = "";
      state._id = "";
    },
  },
});

export const { userSignIn, userLogout } = userSlice.actions;

export default userSlice.reducer;
