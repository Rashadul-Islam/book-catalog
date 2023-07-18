import { api } from "../../api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReadinglist: builder.mutation({
      query: (userData) => ({
        url: "wishlist/create-wishlist",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["wishlist"],
    }),
    readingList: builder.query({
      query: (id) => `wishlist/${id}`,
      providesTags: ["wishlist"],
    }),
  }),
});

export const { useCreateReadinglistMutation, useReadingListQuery } =
  readinglistApi;
