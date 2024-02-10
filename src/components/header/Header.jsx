import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram, BiLogoFacebook } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import logo from "/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  fetchAllProducts,
  updateTotal,
} from "../../redux/features/products/productSlice";
import Filtermodule from "../filtermodule/Filtermodule";
import Navbar from "../navbar/Navbar";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/Aboutus" },
  { title: "Blog", href: "/blog" },
  { title: "Contact us", href: "/contactus" },
];
const SmIcons = [
  { comp: <AiFillInstagram size={20} color="gray" /> },
  { comp: <BiLogoFacebook size={20} color="gray" /> },
  { comp: <BiLogoTelegram size={20} color="gray" /> },
];

export const Header = () => {
  const location = useLocation();
  const [search, setSearch] = useState(" ");
  const [searchMyData, setSearchMyData] = useState([]);
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();
  const { products, cart, amount } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = products.filter((items) =>
      items.title.toLowerCase().includes(search.toLowerCase())
    );
    if (inputData) {
      setSearchMyData(showData);
    } else {
      setSearchMyData([]);
    }
  };

  return (
    <>
      <header className="w-full flex justify-center items-center bg-white shadow-md ">
        <div className="flex justify-between items-center container">
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>

          <form>
            <div className="relative">
              <div className="absolute inset-y-0  flex items-center pr-3 pointer-events-none right-0">
                <FiSearch size={18} color="gray" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={searchHandler}
                className="rounded-md py-[6px] pr-12 pl-2 outline-none text-sm text-gray-900 border"
                required
              />
            </div>
          </form>

          <ul className="flex gap-16">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link to={item.href} key={`id-${item.href}-${item.title}`}>
                  <li
                    className={`hover:text-primery cursor-pointer rounded-3xl transition duration-300 flex items-center  ${
                      isActive && "text-primery"
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="flex gap-2 ">
            {SmIcons.map((item) => (
              <span
                key={item.comp}
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#4E66EC")}
                onMouseOut={({ target }) => (target.style.color = "gray")}
              >
                {item.comp}
              </span>
            ))}
          </div>
        </div>
      </header>
      <Navbar
        products={products}
        cart={cart}
        updateTotal={updateTotal}
        amount={amount}
      />
      <Filtermodule
        searchMyData={searchMyData}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
    </>
  );
};
