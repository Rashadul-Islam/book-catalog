import { useRecentBooksQuery } from "../../redux/features/books/bookApi";
import Book from "./Book";
import { IBook } from "../../types/bookType";

const RecentBooks = () => {
  const { data } = useRecentBooksQuery(undefined);

  return (
    <div className="flex flex-wrap justify-between px-10 bg-gray-900 pb-20">
      {data?.data?.map((book: IBook) => (
        <Book key={book._id} book={book} />
      ))}
    </div>
  );
};

export default RecentBooks;
