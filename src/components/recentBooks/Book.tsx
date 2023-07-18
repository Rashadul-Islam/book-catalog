import { IBook } from "../../types/bookType";
import bookItem from "../../assets/book_items.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { toast } from "react-hot-toast";
import { useCreateWishlistMutation } from "@/redux/features/wishlist/wishlistApi";
import { useEffect } from "react";
import { useCreateReadinglistMutation } from "@/redux/features/readingList/ReadingList";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { _id } = useAppSelector((state) => state.user);
  const [createWishlist, { data }] = useCreateWishlistMutation();
  const [createReadinglist, { data: readingData }] =
    useCreateReadinglistMutation();

  const handleWishList = () => {
    if (!_id) {
      toast.error("Please login first");
    } else {
      const options = {
        book: book?._id,
        user: _id,
      };
      createWishlist(options);
    }
  };
  const handleReadingList = () => {
    if (!_id) {
      toast.error("Please login first");
    } else {
      const options = {
        book: book?._id,
        user: _id,
      };
      createReadinglist(options);
    }
  };

  useEffect(() => {
    if (data?.message) {
      toast.success(`${data?.message}`);
    }
  }, [data]);

  useEffect(() => {
    if (readingData?.message) {
      toast.success(`${readingData?.message}`);
    }
  }, [readingData]);

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
