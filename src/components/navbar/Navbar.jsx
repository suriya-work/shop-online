import { BiUser, BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import Cartmodal from "../cartmodal/Cartmodal";
import { useEffect, useState } from "react";
import Category from "../category/Category";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { useLocation } from "react-router-dom";

const listItems = [
  {
    title: "Sign In",
    icon: <BiUser />,
  },
  {
    title: "Favorite",
    icon: <BiHeart />,
  },
  {
    title: "Cart",
    icon: <HiOutlineShoppingBag />,
  },
];

function Navbar({ products, cart, updateTotal, amount }) {
  const location = useLocation();
  const [shown, setShown] = useState(false);
  const [product, setProduct] = useState(null);
  const handlechange = (index) => {
    index === 2 && setShown(!shown);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setShown(false)
  }, [location]);

  useEffect(() => {
    // Function to select a random product from the array
    if (products && products.length > 0) {
      const selectRandomProduct = () => {
        const index = Math.floor(Math.random() * products.length);
        return products[index];
      };

      const storedProductData = localStorage.getItem("selectedProduct");
      const storedDate = storedProductData
        ? JSON.parse(storedProductData).date
        : null;
      const currentDate = new Date().toISOString().split("T")[0];

      if (!storedDate || storedDate !== currentDate) {
        // If it's a new day or no product is stored, select a random product
        const randomProduct = selectRandomProduct();
        // Store the selected product and the current date
        localStorage.setItem(
          "selectedProduct",
          JSON.stringify({ date: currentDate, product: randomProduct })
        );
        setProduct(randomProduct);
      } else {
        // If a product is already stored for today, use it
        const storedProduct = JSON.parse(storedProductData).product;
        setProduct(storedProduct);
      }
    }

    // Set the random product when the component mounts or products update
  }, [products]);

  return (
    <div className="w-full h-[85px] hidden md:flex items-center justify-center py-5 bg-[#262626] text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* first part */}
        <div className="flex items-center gap-5">
          <Category />
          <select className="text-xs bg-[#262626] duration-300 text-gray-400 border-none outline-none px-1 py-1">
            <option>USD</option>
            <option>EUR</option>
          </select>
          <select className="text-xs bg-[#262626] duration-300 text-gray-400 border-none outline-none px-1 py-1">
            <option>English</option>
            <option>Persian</option>
            <option>Arabic</option>
          </select>
        </div>
        <span className="border-r-[1px] border-gray-500 w-[1px] h-[50px]"></span>
        {/* middle part */}
        <div className="flex gap-2 items-center">
          {product && (
            <>
              <div className="rounded-2xl w-[50px] h-[50px] overflow-hidden bg-white ">
                <img src={product.image} className=" w-[80%] h-[80%] m-auto" />
              </div>
              <div>
                <p className="text-sm truncate">
                  {product.title.substring(0, 35)}...
                </p>
                <p className="text-xs text-gray-400">
                  {product.description.substring(0, 45)}...
                </p>
              </div>
            </>
          )}
        </div>
        <span className="border-r-[1px] border-gray-500 w-[1px] h-[50px]"></span>

        {/* third part */}
        <ul className="flex gap-5">
          {listItems.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-1 items-center text-sm hover:text-primery cursor-pointer"
              onClick={() => handlechange(index)}
            >
              <span>{item.icon}</span>
              {item.title}
              {index === 2 && (
                <span className="w-[18px] h-[18px] flex items-center justify-center text-[12px] rounded-full bg-[#3dc47e] text-white">
                  {amount}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Cartmodal
        cart={cart}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
    </div>
  );
}

export default Navbar;
