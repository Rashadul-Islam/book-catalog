/* eslint-disable react-hooks/exhaustive-deps */
import bookDetails from "@/assets/book_items.png";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "@/redux/features/books/bookApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";
import Swal from "sweetalert2";
import { useEffect } from "react";

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSingleBookQuery(id);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  const { _id } = useAppSelector((state) => state.user);

  const handleDelete = () => {
    Swal.fire({
      title: "Warning",
      text: "Do you want to delte",
      icon: "warning",
      confirmButtonText: "Confirm",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id);
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/books");
    }
  }, [isSuccess]);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-[800px]">
        <img src={bookDetails} alt="" className="w-[20%] mx-auto pt-[100px]" />
        <div className="flex flex-col justify-center text-white text-center pt-10 pb-5">
          <h3>Title: {data?.data?.title}</h3>
          <p>Author: {data?.data?.author}</p>
          <p>Genre: {data?.data?.genre}</p>
          <p>Publication date: {data?.data?.publicationDate}</p>
        </div>
        {data?.data?.user._id === _id && (
          <div className="flex justify-center gap-3 pb-10">
            <Link
              className="bg-white text-black px-3 py-1 rounded"
              to={`/book/edit/${data?.data?._id}`}
              state={data?.data}
            >
              Edit Book
            </Link>
            <p
              className="cursor-pointer bg-white text-black px-3 py-1 rounded"
              onClick={handleDelete}
            >
              Delete Book
            </p>
          </div>
        )}
        <div>
          {data?.data?.comments?.map((comment: string, index: number) => (
            <div key={index} className="text-white flex gap-3 px-10 py-3">
              <p className="">
                <FaUserCircle size={30} />
              </p>
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
