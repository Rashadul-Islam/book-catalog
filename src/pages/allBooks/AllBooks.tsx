import Book from "@/components/recentBooks/Book";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/bookType";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div>
      <Navbar />
      <div className="px-10 bg-gray-900 pb-20 pt-[100px]">
        <div className="flex justify-center pb-10">
          <input
            type="text"
            placeholder="Search by title, author, genre..."
            className="w-[40%] px-4 py-2 rounded-full placeholder:text-black bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          {data?.data?.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBooks;
