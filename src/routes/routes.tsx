import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import AddBook from "../pages/addBooks/AddBook";
import AllBooks from "@/pages/allBooks/AllBooks";
import BookDetails from "@/pages/bookDetails/BookDetails";
import EditBook from "@/pages/editBook/EditBook";
import Home from "@/pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/add-new-books",
        element: <AddBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/book/edit/:id",
        element: <EditBook />,
      },
    ],
  },
]);

export default routes;
