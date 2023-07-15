import { api } from "../../api/apiSlice";
import { ISignIn, IUser } from "../../../types/user";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signInUser: builder.mutation<ISignIn, Partial<IUser>>({
      query: (data) => ({
        url: "auth/signin",
        method: "POST",
        body: data,
      }),
    }),
    signUpUser: builder.mutation<IUser, IUser>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignInUserMutation, useSignUpUserMutation } = userApi;
