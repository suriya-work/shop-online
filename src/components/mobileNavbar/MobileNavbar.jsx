import { Link, useLocation } from "react-router-dom";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { BiCategory, BiSolidCategory } from "react-icons/bi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";

const NavigationListItems = [
  {
    title: "My Acc",
    href: "/account",
    iconOutline: <RiHome2Line size={20} />,
    iconActive: <RiHome2Fill size={20} />,
  },
  {
    title: "Cart",
    href: "/cartpage",
    iconOutline: <HiOutlineShoppingBag size={20} />,
    iconActive: <HiShoppingBag size={20} />,
  },
  {
    title: "Categories",
    href: "/categories",
    iconOutline: <BiCategory size={20} />,
    iconActive: <BiSolidCategory size={20} />,
  },
  {
    title: "Home",
    href: "/",
    iconOutline: <RiHome2Line size={20} />,
    iconActive: <RiHome2Fill size={20} />,
  },
];

function MobileNavbar() {
  const location = useLocation();
  return (
    <div className="w-full flex items-center justify-center md:hidden right-0 fixed bottom-[0] text-gray-500 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[99] h-[70px] ">
      <ul className="grid grid-cols-4">
        {NavigationListItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link key={`id_${item.title}_${item.href}`} to={item.href}>
              <li
                className={`flex flex-col items-center text-sm ${
                  isActive && "text-primery"
                } `}
              >
                {isActive ? (
                  <span>{item.iconActive}</span>
                ) : (
                  <span>{item.iconOutline}</span>
                )}

                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileNavbar;
