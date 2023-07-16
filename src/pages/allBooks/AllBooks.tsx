import Book from "@/components/recentBooks/Book";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/bookType";
import { Pagination } from "@mui/material";
import { useState } from "react";

const AllBooks = () => {
  const [serachData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data } = useGetBooksQuery(`?searchTerm=${serachData}&page=${page}`);
  const handleChange = (event, value: number) => {
    setPage(value);
  };
  return (
    <div>
      <Navbar />
      <div className="px-10 bg-gray-900 pb-20 pt-[100px]">
        <div className="flex justify-center pb-10">
          <input
            type="text"
            placeholder="Search by title, author, genre..."
            onChange={(e) => setSearchData(e.target.value)}
            className="lg:w-[40%] md:w-[60] w-[90%] px-4 py-2 rounded-full placeholder:text-black bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          {data?.data?.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
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
      <Footer />
    </div>
  );
};

export default AllBooks;
