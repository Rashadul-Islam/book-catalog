import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="pt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
