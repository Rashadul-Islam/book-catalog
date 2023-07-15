import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ILogin {
  token: string;
}

const initialState: ILogin = {
  token: "",
};

interface ILoginResponse {
  accessToken: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state, action: PayloadAction<ILoginResponse>) => {
      state.token = action.payload.accessToken;
    },
  },
});

export const { userSignIn } = userSlice.actions;

export default userSlice.reducer;
