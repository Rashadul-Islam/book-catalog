import Book from "@/components/recentBooks/Book";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/bookType";
import { Pagination } from "@mui/material";
import { useState } from "react";

const AllBooks = () => {
  const [serachData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    genre: "",
    publicationDate: "",
  });
  const [readyFilter, setReadyFilter] = useState<string>("");
  const { data } = useGetBooksQuery(
    `?searchTerm=${serachData}&page=${page}&${readyFilter}`
  );
  const handleChange = (event, value: number) => {
    setPage(value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter?.genre) {
      setReadyFilter(`${filter}&genre=${filter.genre}`);
    }
    if (filter?.publicationDate) {
      setReadyFilter(`${filter}&publicationDate=${filter.publicationDate}`);
    }
    setFilter({
      genre: "",
      publicationDate: "",
    });
  };

  return (
    <div>
      <div className="px-10 bg-gray-900 pb-20 pt-[100px]">
        <div className="flex justify-center pb-5">
          <input
            type="text"
            placeholder="Search by title, author, genre..."
            onChange={(e) => setSearchData(e.target.value)}
            className="lg:w-[40%] md:w-[60] w-[90%] px-4 py-2 rounded-full placeholder:text-black bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex md:flex-row flex-col gap-3 pb-10 lg:w-[70%] mx-auto w-[90%]"
        >
          <input
            type="text"
            name="genre"
            placeholder="Enter genre"
            value={filter.genre}
            onChange={handleFilter}
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <input
            type="date"
            name="publicationDate"
            value={filter.publicationDate}
            placeholder="Enter year"
            onChange={handleFilter}
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button type="submit" className="px-4 py-2 bg-white rounded-full">
            Filter
          </button>
        </form>
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
    </div>
  );
};

export default AllBooks;
