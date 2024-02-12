import  { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";


export const Hamburger = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GiHamburgerMenu onClick={handleClick} size={20} />
      <div
        className={`absolute  left-0 top-0 h-screen  w-full bg-white opacity-0 ${
          isOpen
            ? "visible opacity-50 transition duration-500 ease-in-out "
            : " invisible opacity-0   transition duration-500 ease-in-out"
        }`}
        onClick={handleClick}
      >
        .
      </div>
      <div
        className={`absolute left-0 top-0 z-20 flex h-screen w-[75%] flex-col items-center gap-7 bg-white drop-shadow-lg   ${
          isOpen
            ? "translate-x-[0rem] transform  transition duration-500 ease-in-out"
            : "translate-x-[-800px] transform transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex w-[75%] items-center justify-between pt-12">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
          </div>
          <RxCross2 onClick={handleClick} size={20} />
        </div>
        {/* <Search /> */}

        <ul className="mt-3 flex w-3/4 flex-col gap-10 text-xl font-medium text-black opacity-60 ">
          {navigationItems.map((item) => {
            return (
              <Link to={item.href} key={item}>
                <li
                  className="hover:text-primery cursor-pointer rounded-3xl transition duration-300 flex items-center "
                  key={`id-${item.href}-${item.title}`}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};