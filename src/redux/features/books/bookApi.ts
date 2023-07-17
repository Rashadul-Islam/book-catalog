import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (filter: string) => `books${filter}`,
      providesTags: ["comments"],
    }),
    recentBooks: builder.query({
      query: () => "books/recent-books",
      providesTags: ["comments"],
    }),
    singleBook: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["comments"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comments"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "books/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  usePostBookMutation,
  useRecentBooksQuery,
  useDeleteBookMutation,
  useEditBookMutation,
} = bookApi;
