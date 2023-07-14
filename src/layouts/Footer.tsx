const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 ml-6"
              aria-label="Facebook"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 10V8c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v2m-8-2v12"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 ml-6"
              aria-label="Twitter"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 3.05c-1 .417-2 .55-3 .55C17.5 3.6 14 2 12 2c-1.225 0-2.45.4-3.5 1.05A4.978 4.978 0 0 0 2 6c0 1.116.366 2.158 1 3-.634.842-.996 1.884-1 3 .004 4.418 3.582 8 8 8 .784 0 1.552-.114 2.288-.338a6.963 6.963 0 0 1-1.288-.812l-.037-.027A5.012 5.012 0 0 0 17 17v.004c3.86-.304 7-3.404 7-7.504 0-.252-.012-.504-.036-.754.718-.52 1.362-1.176 1.864-1.946l.037-.054-.001-.002s.826-1.626.479-3.356l-.012-.086zM21 10v.004"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 ml-6"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 3h-3c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h3m0-16c-2.761 0-5 2.239-5 5v10c0 2.761 2.239 5 5 5h3c2.761 0 5-2.239 5-5V8c0-2.761-2.239-5-5-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h3c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3z"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
