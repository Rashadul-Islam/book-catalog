import { useRecentBooksQuery } from "../../redux/features/books/bookApi";
import Book from "./Book";
import { IBook } from "../../types/bookType";

const RecentBooks = () => {
  const { data } = useRecentBooksQuery(undefined);

  return (
    <div className="flex flex-wrap justify-between">
      {data && data?.data?.map((book: IBook) => (
        <Book key={book._id} book={book} />
      ))}
    </div>
  );
};

export default RecentBooks;
