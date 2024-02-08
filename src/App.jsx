import "./App.css";

import { Route, Routes } from "react-router-dom";
// import { store } from './app/store'
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import Cart from './components/Cart'
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Banner from "./components/hero-section/HeroSection";
// import Card from './components/card/Card';
import Newproducts from "./components/card/Newproducts";
import Cartpage from "./components/cartpage/Cartpage";
import Detailpage from "./components/detailpage/Detailpage";
import Finalpage from "./components/finalpage/Finalpage";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="min-h-screen grid grid-rows-[80px_1fr_auto]">
          <Header />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/newproducts" element={<Newproducts />} />
            <Route path="/cartpage" element={<Cartpage />} />
            <Route path="products/:productId" element={<Detailpage />} />
            <Route path="/finalpage" element={<Finalpage />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default App;
