import { api } from "../../api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReadinglist: builder.mutation({
      query: (userData) => ({
        url: "readinglist/create-readinglist",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["reading"],
    }),
    updateReadinglist: builder.mutation({
      query: (data) => ({
        url: "readinglist",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reading"],
    }),
    readingList: builder.query({
      query: (id) => `readinglist?${id}`,
      providesTags: ["reading"],
    }),
  }),
});

export const {
  useCreateReadinglistMutation,
  useUpdateReadinglistMutation,
  useReadingListQuery,
} = readinglistApi;
