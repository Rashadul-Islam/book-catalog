import { usePostBookMutation } from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const { _id } = useAppSelector((state) => state.user);
  const [postBook, { data }] = usePostBookMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      title: title,
      author: author,
      genre: genre,
      publicationDate: publicationDate,
      user: _id,
    };
    postBook(options);
  };

  useEffect(() => {
    if (data?.message) {
      toast.success(`${data?.message}`);
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicationDate("");
    }
  }, [data]);

  return (
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
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
  );
};

export default AddBookForm;
