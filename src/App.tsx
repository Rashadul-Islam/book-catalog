import HeroSection from "./components/heroSection/HeroSection";
import RecentBooks from "./components/recentBooks/RecentBooks";
import Footer from "./layouts/Footer";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <MainLayout />
      <HeroSection />
      <RecentBooks/>
      <Footer/>
    </div>
  );
}

export default App;
