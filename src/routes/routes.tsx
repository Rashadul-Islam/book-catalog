import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: '/products',
    //     element: <Products />,
    //   },
    //   {
    //     path: '/product-details/:id',
    //     element: <ProductDetails />,
    //   },
    //   {
    //     path: '/checkout',
    //     element: <Checkout />,
    //   },
    // ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '*',
//     element: <NotFound />,
//   },
]);

export default routes;
