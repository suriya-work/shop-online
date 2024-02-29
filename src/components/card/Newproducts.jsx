import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { Link } from "react-router-dom";
import AddToCartBtn from "../addtocartbtn/AddToCartBtn";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const Newproducts = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const cartMyData = carts.filter((items) => items.category === "jewelery");

  return (
    <>
      <div className="">
        <div className="container my-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {cartMyData
            // .filter((cat) => cat.category === props.filterName)
            // .slice(0, 4)
            .map((item) => {
              return (
                <section
                  className=" flex flex-col justify-around cursor-pointer  transition duration-500 "
                  key={item.id}
                >
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.image}
                      alt="aks"
                      className="w-[100px] h-[100px] overflow-hidden mt-5 transition duration-300 ease-in-out hover:scale-110 m-auto"
                    />
                  </Link>
                  {/* first section */}
                  <div className="pl-5 flex justify-between h-[40%]">
                    {/* <div className="flex flex-col justify-around">
                      <p className=" text-sm font-semibold" title={item.title}>
                        {item.title.substring(0, 20)}...
                      </p>

                      <div className="flex gap-5 ">
                        <span className="flex">
                          <FaStar size={16} color="gold" />
                          <FaStar size={16} color="gold" />
                          <FaStar size={16} color="gold" />
                          <FaStar size={16} color="gold" />
                          <FaStar size={16} color="gold" />
                        </span>
                        <span className="text-sm text-gray-500">
                          ({item.rating.count})
                        </span>
                      </div>

                      <p className="text-red-500 text-sm font-bold mb-3 ">
                        ${item.price}
                      </p>
                    </div> */}

                    {/* second section */}

                    {/* <div className="flex flex-col items-center mt-3 justify-around pr-5">
                      <MdFavoriteBorder
                        size={21}
                        className="hover:text-red-500 mb-8"
                      />
                      <AddToCartBtn
                        item={item}
                        className={
                          "border bg-white text-black rounded-md p-2  justify-center items-center  hover:bg-primery hover:text-white transition-all ease-linear duration-300"
                        }
                      />
                    </div> */}
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Newproducts;
