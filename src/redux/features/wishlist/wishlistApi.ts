import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (userData) => ({
        url: "wishlist/create-wishlist",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["wishlist"],
    }),
    wishlist: builder.query({
      query: (id) => `wishlist/${id}`,
      providesTags: ["wishlist"],
    }),
  }),
});

export const { useCreateWishlistMutation, useWishlistQuery } = wishlistApi;
