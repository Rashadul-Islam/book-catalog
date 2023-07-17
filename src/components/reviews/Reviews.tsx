import { usePostCommentMutation } from "@/redux/features/books/bookApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Reviews = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [postComment, { isError }] = usePostCommentMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      id: id,
      data: { comment: comment },
    };
    postComment(options);
    setComment("");
  };

  useEffect(() => {
    if (isError) {
      toast.error("Please login for comment");
    }
  }, [isError]);

  return (
    <div className="px-10 pb-10">
      <Toaster />
      <h1 className="text-white py-3 text-center pt-10">Reviews</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <textarea
          rows={3}
          className="w-full p-2 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Write your comment..."
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
