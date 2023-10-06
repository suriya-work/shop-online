
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
// import { store } from './app/store'
import { store } from './redux/store';
import { Provider } from 'react-redux'
// import Cart from './components/Cart'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
// import Card from './components/card/Card';
import Newproducts from './components/card/Newproducts';
import Cartpage from './components/cartpage/Cartpage';
import Detailpage from './components/detailpage/Detailpage';
import Finalpage from './components/finalpage/Finalpage';
const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/newproducts' element={<Newproducts />} />
        <Route path='/cartpage' element={<Cartpage />} />
        <Route path='products/:productId' element={<Detailpage />} />
        <Route path='/finalpage' element={<Finalpage />} />
        {/* <Route path="products/:productId" element={<Detailpage />} /> */}
      </Routes>

      <Footer />
    </Provider>
  )
}

export default App
