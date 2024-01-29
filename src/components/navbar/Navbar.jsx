
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../../public/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/features/products/productSlice';
import Filtermodule from '../filtermodule/Filtermodule';
import { updateTotal } from '../../redux/features/products/productSlice';
import Cartmodal from '../cartmodal/Cartmodal';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: "Men's Products", href: '/newproducts', current: false },
  { name: 'Jewelery Products', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const [search, setSearch] = useState(" ");
  const [searchMyData, setSearchMyData] = useState([]);
  const [shown, setShown] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const { amount, cart, products } = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  useEffect(() => {
    dispatch(updateTotal())
  }, [dispatch, cart])


  const searchHandler = (e) => {
    const inputData = e.target.value
    setSearch(inputData)
    const showData = products.filter((items) => items.title.toLowerCase().includes(search.toLowerCase()))
    if (inputData) {
      setSearchMyData(showData)
    } else {
      setSearchMyData([])
    }

  }



  // const showHandler = () => {
  //   setShow((current) => !current);
  //   !showCart ? setShowCart((current) => !current) : ""
  // }
  // const showCartHandler = () => {
  //   setShowCart((current) => !current);
  //   !show ? setShow((current) => !current) : ""
  // }

  return (
    <>
      <Disclosure as="nav" className="fixed z-50 top-[0px] bg-white opacity-90 shadow-sm w-full pb-2 container-header">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-3  text-black pt-[2rem]">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-5">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to='/'>
                      <img
                        className="w-[100px] hidden sm:block"
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="md:hidden lg:flex ml-6 hidden">
                    <div className="flex m-auto">
                      {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`text-black
                          px-6 py-4 text-sm font-bold mx-4 me-0 nav-menu  ${isActive && 'text-RedLight'}`}
                          // aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='flex justify-between mt-5'>
                  <form>
                    <div className="relative mr-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinejoin="round" strokeWidth="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      {/* onClick={showHandler} */}
                      <input type="text" placeholder='Search...' value={search} onChange={searchHandler} id="default-search" className="block w-full lg:px-12 p-[6px] pl-10 text-sm border rounded-lg bg-[#fff]" />
                    </div>
                  </form>
                  <div className='mr-3 relative'>
                    <AiOutlineShoppingCart size={30} onClick={() => setShown(!shown)} />
                    <span className="w-[22px] h-[22px] px-[7px] py-[1px] rounded-full bg-[#A71B4A] absolute bottom-5 left-4 text-white">
                      {amount}
                    </span>

                  </div>

                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden header-menu">
              <div className="space-y-1 px-2 pb-3 pt-2 ">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? '' : 'text-black',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>


          </>
        )}
      </Disclosure>
      <div>
        <Cartmodal cart={cart}
          shown={shown}
          close={() => setShown(false)}

        />
      </div>
      <div>
        <Filtermodule searchMyData={searchMyData} />
      </div>
    </>


  )
}
// style={{
//   display: show ? "none" : "",
// }}