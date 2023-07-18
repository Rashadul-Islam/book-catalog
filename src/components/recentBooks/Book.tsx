import { IBook } from "../../types/bookType";
import bookItem from "../../assets/book_items.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { toast } from "react-hot-toast";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { token } = useAppSelector((state) => state.user);

  const handleWishList = () => {
    if (!token) {
      toast.error("Please login first");
    }
  };
  const handleReadingList = () => {
    if (!token) {
      toast.error("Please login first");
    }
  };

  return (
    <Link
      to={`/book/${book?._id}`}
      className="w-[320px] rounded-md p-3 border my-3 cursor-pointer"
    >
      <img src={bookItem} alt="" className="w-[150px] mx-auto my-5" />
      <div className="text-center text-white">
        <h3>Title: {book?.title}</h3>
        <p>Author: {book?.author}</p>
        <p>Genre: {book?.genre}</p>
        <p>Published on: {book?.publicationDate}</p>
      </div>
      <div
        className="flex justify-between px-3 py-5"
        onClick={(e) => e.preventDefault()}
      >
        <button
          onClick={handleWishList}
          className="px-3 py-1 bg-white rounded-md"
        >
          Add wishlist
        </button>
        <button
          onClick={handleReadingList}
          className="px-3 py-1 bg-white rounded-md"
        >
          Add reading list
        </button>
      </div>
    </Link>
  );
};

export default Book;
