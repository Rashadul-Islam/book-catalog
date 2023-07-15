import heroImage from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4 md:mb-8 text-center">
            Welcome to Our Book Catalog
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-12">
            Discover a wide range of books across various genres.
          </p>
          <img className="w-[50%] mb-10" src={heroImage} alt="" />
          <a
            href="#books"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium transition duration-300 shadow-md"
          >
            Explore Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
