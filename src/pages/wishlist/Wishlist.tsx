import { useState } from "react";
import { useWishlistQuery } from "@/redux/features/wishlist/wishlistApi";
import { IWish } from "@/types/bookType";
import { Pagination } from "@mui/material";

const Wishlist = () => {
  const [page, setPage] = useState(1);
  const { data } = useWishlistQuery(`page=${page}`);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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

export default Wishlist;
