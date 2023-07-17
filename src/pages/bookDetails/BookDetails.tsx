import bookDetails from "@/assets/book_items.png";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { useSingleBookQuery } from "@/redux/features/books/bookApi";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useSingleBookQuery(id);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900">
        <img src={bookDetails} alt="" className="w-[20%] mx-auto pt-[100px]" />
        <div className="flex flex-col justify-center text-white text-center pt-10 pb-5">
          <h3>Title: {data?.data?.title}</h3>
          <p>Author: {data?.data?.author}</p>
          <p>Genre: {data?.data?.genre}</p>
          <p>Publication date: {data?.data?.publicationDate}</p>
        </div>
        <div className="flex justify-center gap-3 pb-10">
          <Link
            className="bg-white text-black px-3 py-1 rounded"
            to="/book/edit/:data?.data?._id"
          >
            Edit Book
          </Link>
          <p className="cursor-pointer bg-white text-black px-3 py-1 rounded">
            Delete Book
          </p>
        </div>
        <div>
          {data?.data?.comments?.map((comment: string, index: number) => (
            <div key={index} className="text-white flex gap-3 px-10 py-3">
              <p className=""><FaUserCircle size={30}/></p>
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <hr />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
