import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cartpage from "../components/cartpage/Cartpage";
import Finalpage from "../components/finalpage/Finalpage";
import Banner from "../components/hero-section/HeroSection";
import PageNotFound from "../pagenotfound/PageNotFound";
import Detailpage from "../components/detailpage/Detailpage";
import SignIn from "../components/signin/SignIn";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <Banner />,
      },

      {
        path: "cartpage",
        element: <Cartpage />,
      },

      {
        path: "finalpage",
        element: <Finalpage />,
      },

      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "products/:productId",
        element: <Detailpage />,
      },
    ],
  },
]);
export default router;
