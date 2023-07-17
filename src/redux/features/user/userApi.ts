import { RootState } from "@/redux/store";
import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signInUser: builder.mutation({
      query: (data) => ({
        url: "auth/signin",
        method: "POST",
        body: data,
      }),
    }),
    signUpUser: builder.mutation({
      query: (userData) => ({
        url: "auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
        prepareHeaders: (headers: Headers, { getState }) => {
          const token = (getState() as RootState).user.token;
          console.log(token)
          if (token) {
            headers.set("authorization", `Bearer ${token}`);
          }

          return headers;
        },
      }),
    }),
  }),
});

export const {
  useSignInUserMutation,
  useSignUpUserMutation,
  useLogoutUserMutation,
} = userApi;
