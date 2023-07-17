/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IBook } from "@/types/bookType";
import { useEditBookMutation } from "@/redux/features/books/bookApi";

const EditBook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [editData, setEditData] = useState<IBook>(state);
  const [editBook, { isSuccess }] = useEditBookMutation();

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option = {
      id: state?._id,
      data: editData,
    };
    editBook(option);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/books");
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="flex gap-5 justify-center bg-gray-900 items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-[40%] p-6 rounded shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editData?.title}
              onChange={handleEdit}
              placeholder="Enter title"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-white text-sm font-bold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={editData?.author}
              onChange={handleEdit}
              placeholder="Enter author"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-white text-sm font-bold mb-2"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={editData?.genre}
              onChange={handleEdit}
              placeholder="Enter genre"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="publicationDate"
              className="block text-white text-sm font-bold mb-2"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              value={editData?.publicationDate}
              onChange={handleEdit}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
