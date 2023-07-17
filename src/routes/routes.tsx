import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import AddBook from "../pages/addBooks/AddBook";
import AllBooks from "@/pages/allBooks/AllBooks";
import BookDetails from "@/pages/bookDetails/BookDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

export default routes;
