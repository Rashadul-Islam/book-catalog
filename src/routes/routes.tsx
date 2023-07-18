import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import AddBook from "../pages/addBooks/AddBook";
import AllBooks from "@/pages/allBooks/AllBooks";
import BookDetails from "@/pages/bookDetails/BookDetails";
import EditBook from "@/pages/editBook/EditBook";
import Home from "@/pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "@/pages/wishlist/Wishlist";
import ReadingList from "@/pages/readingList/ReadingList";

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
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/readinglist",
        element: (
          <PrivateRoute>
            <ReadingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/book/edit/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
