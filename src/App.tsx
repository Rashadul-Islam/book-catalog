import HeroSection from "./components/heroSection/HeroSection";
import RecentBooks from "./components/recentBooks/RecentBooks";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <MainLayout />
      <HeroSection />
      <RecentBooks/>
    </div>
  );
}

export default App;
