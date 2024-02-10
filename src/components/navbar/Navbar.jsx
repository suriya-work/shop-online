import { BiCategory, BiUser, BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import Cartmodal from "../cartmodal/Cartmodal";
import { useEffect, useState } from "react";

const listItems = [
  {
    title: "Sign in",
    icon: <BiUser />,
  },
  {
    title: "Favorite",
    icon: <BiHeart />,
  },
  {
    title: "Card",
    icon: <HiOutlineShoppingBag />,
  },
];

function Navbar({ products, cart, updateTotal, amount }) {
  const [shown, setShown] = useState(false);
  const handlechange = (index) => {
    index === 2 && setShown(!shown);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);
  return (
    <div className="w-full h-auto py-5 bg-[#262626] text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* first part */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-1">
            <BiCategory />
            <p className="font-semibold text-lg">Categories</p>
          </div>
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

        {/* middle part */}
        <div className="flex gap-2 items-center">
          {products.slice(0, 1).map((item) => (
            <>
              <div className="rounded-2xl w-[50px] h-[50px] overflow-hidden bg-white ">
                <img src={item.image} className=" w-[80%] h-[80%] m-auto" />
              </div>
              <div>
                <p className="text-sm truncate">
                  {item.title.substring(0, 35)}...
                </p>
                <p className="text-xs text-gray-400">
                  {item.description.substring(0, 45)}...
                </p>
              </div>
            </>
          ))}
        </div>

        {/* third part */}
        <ul className="flex gap-5">
          {listItems.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-1 items-center hover:text-primery cursor-pointer"
              onClick={() => handlechange(index)}
            >
              <span className="">{item.icon}</span>
              {item.title}
              {index === 2 && (
                <span className="w-[20px] h-[20px] text-[12px] px-[5px] py-[2px] rounded-full bg-[#3dc47e] text-white">
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
