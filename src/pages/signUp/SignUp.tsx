import { Link } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gray-900">
        <section className="flex flex-col h-screen md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-white">
                Signin
              </p>
            </div>
            <div className="flex gap-3 mb-4">
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              name="rePassword"
              placeholder="Retype Password"
            />
            <div className="text-center flex justify-between items-center lg:flex-row md:flex-col">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Signup
              </button>
              <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Already have an account?{" "}
                <Link
                  className="text-red-600 hover:underline hover:underline-offset-4"
                  to="/signin"
                >
                  Signin
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
