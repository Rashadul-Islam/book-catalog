import { api } from "../../api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReadinglist: builder.mutation({
      query: (userData) => ({
        url: "readinglist/create-wishlist",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["reading"],
    }),
    readingList: builder.query({
      query: (id) => `readinglist/${id}`,
      providesTags: ["reading"],
    }),
  }),
});

export const { useCreateReadinglistMutation, useReadingListQuery } =
  readinglistApi;
