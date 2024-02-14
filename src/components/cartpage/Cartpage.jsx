import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  incrementQuantity,
  decrementQuantity,
  removeCartItem,
  removeItem,
} from "../../redux/features/products/productSlice";
// import Title from "../../components/title/Title";
import { Link } from "react-router-dom";
import Related from "../relatedproducts/Related";

function Cartpage() {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.cart);
  const { total, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <div className="container mt-10 grid  grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-10 mb-12">
        <div className="flex flex-col gap-5">
          {mainData.length === 0 ? (
            <div className="flex flex-col  justify-center items-center text-2xl ">
              <h2>Your Cart Is Empty!</h2>
              <Link to="/">
                <button className="border border-gray-500 text-gray-500  px-4 py-1 rounded-2xl mt-3 hover:border-primery hover:bg-primery hover:text-white">
                  Go To Shop!
                </button>
              </Link>
            </div>
          ) : (
            mainData.map((item) => {
              return (
                <div
                  className="flex justify-between items-center"
                  key={item.id}
                >
                  <div className="flex justify-center w-[100px] h-[110px] border rounded-[10px] border-opacity-60">
                    <Link to={`/products/${item.id}`}>
                      <div className="overflow-hidden w-full h-[100px] ">
                        <div className="w-full h-full flex justify-center items-center ">
                          <img
                            src={item.image}
                            alt="productImage"
                            className="max-w-[80%] h-full object-contain"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mr-auto pl-5">
                    <p className="">{item.title.substring(0, 20)}...</p>
                  </div>
                  <div className="flex gap-20 items-center">
                    <p className="font-semibold  text-gray-500">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        className="border w-[28px] h-[28px] flex items-center justify-center text-xs cursor-pointer"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <p className="bg-[#eee] rounded-full w-[25px] h-[25px] flex items-center justify-center text-xs">
                        {item.quantity}
                      </p>
                      <button
                        className="border w-[28px] h-[28px] flex items-center justify-center text-xs cursor-pointer"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <FaRegTrashCan
                        size={16}
                        className="cursor-pointer text-gray-400"
                        onClick={() => dispatch(removeItem(item.id))}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="w-full">
          {mainData.length !== 0 ? (
            <div className="bg-[#e9e9e9] rounded-md w-full h-[293px] flex flex-col px-5 py-5 lg:sticky lg:top-32 lg:z-12 lg:ml-auto  mb-12">
              <h2 className="font-semibold text-sm pb-5">Order Summary</h2>
              <div className="flex  justify-between items-center">
                <div className="flex flex-col gap-4 text-gray-500">
                  <p>Price</p>
                  <p>Shipping</p>
                  <p>Tax</p>
                  <p className="font-semibold text-black">Total Price</p>
                </div>
                <div className="flex flex-col gap-4 ">
                  <span>${parseFloat(total).toFixed(2)}</span>
                  <span>$0</span>
                  <span>$0</span>

                  <span className="font-semibold">
                    ${parseFloat(total).toFixed(2)}
                  </span>
                </div>
              </div>
              <Link to="/finalpage">
                <button
                  className="border border-gray-500 text-gray-500 w-full py-1 mt-6 text-[20px] rounded-[10px] hover:border-primery hover:bg-primery hover:text-white"
                  onClick={() => dispatch(removeCartItem())}
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Related data={products} singlePost={products[0]} />
    </>
  );
}

export default Cartpage;
