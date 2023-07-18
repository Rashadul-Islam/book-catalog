import { useState } from "react";
import { IWish } from "@/types/bookType";
import { Pagination } from "@mui/material";
import {
  useReadingListQuery,
  useUpdateReadinglistMutation,
} from "@/redux/features/readingList/ReadingList";

const ReadingList = () => {
  const [page, setPage] = useState(1);
  const { data } = useReadingListQuery(`page=${page}`);
  const [updateReadinglist] = useUpdateReadinglistMutation();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleClick = (data: IWish) => {
    const { book, user } = data;
    const options = {
      book: book._id,
      user: user,
      status: "finished",
    };
    updateReadinglist(options);
  };

  return (
    <div className="min-h-[1000px] px-10 flex flex-col items-center justify-center overflow-x-auto">
      <h3 className="underline italic text-white mb-10">Wishlist Books</h3>
      <table className="border-collapse text-white w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Author</th>
            <th className="border border-gray-300 px-4 py-2">Genre</th>
            <th className="border border-gray-300 px-4 py-2">
              Publication Date
            </th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.data?.map((data: IWish) => (
            <tr key={data?.book?._id}>
              <td className="border border-gray-300 px-4 py-2">
                {data?.book.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data?.book?.author}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data?.book?.genre}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data?.book?.publicationDate}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data?.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  disabled={data?.status === "finished"}
                  className="border rounded-md bg-blue-500 px-4 py-1"
                  onClick={() => handleClick(data)}
                >
                  complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center pt-10">
        <Pagination
          count={data && Math.ceil(data?.meta?.total / data?.meta?.limit)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
};

export default ReadingList;
