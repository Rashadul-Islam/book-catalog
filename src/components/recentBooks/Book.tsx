import { IBook } from "../../types/bookType";
import bookItem from "../../assets/book_items.png";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  return (
    <Link
      to={`/book/${book?._id}`}
      className="w-[320px] rounded-md p-3 border my-3 cursor-pointer"
    >
      <img src={bookItem} alt="" className="w-[150px] mx-auto my-5" />
      <div className="text-center text-white">
        <h3>Title: {book?.title}</h3>
        <p>Author: {book?.author}</p>
        <p>Published on: {book?.publicationDate}</p>
      </div>
    </Link>
  );
};

export default Book;
