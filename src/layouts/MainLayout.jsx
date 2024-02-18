import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../hooks/ScrollToTop";

function MainLayout() {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[100px_1fr_auto]">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default MainLayout;