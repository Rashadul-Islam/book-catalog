import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers: Headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        console.log(token)
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});
