import { removeItem } from "../../redux/features/products/productSlice";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cartmodal = ({ cart, shown, close }) => {
  const dispatch = useDispatch();
  return shown ? (
    <div className="modal-backdrop" onClick={close}>
      <div
        className="bg-white md:top-[7%] md:w-[95%] lg:w-[40%] w-[95%] top-[8%] h-[500px]  shadow-2xl border  fixed z-30 right-[0px] lg:top-[11%] overflow-y-scroll scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {cart.length === 0 ? (
          <div className="h-full flex justify-center items-center text-center  text-2xl">
            <h2 className="text-center m-auto text-black">Your Cart Is Empty!</h2>
          </div>
        ) : (
          cart.slice(0, 3).map((search) => {
            return (
              <div key={search.id} className="flex items-center my-10 hover:shadow-sm pb-1 cursor-pointer pr-2">
                <div className="w-[90px] h-[70px] mx-5">
                  <Link to={`/products/${search.id}`}>
                    <img src={search.image} alt="" className="w-full h-full" />
                  </Link>
                </div>
                <div className=" w-[80%] flex flex-col gap-4">
                  <p className="text-black">{search.title.substring(0, 35)}...</p>
                  <div className="flex items-center gap-4">
                    <p className="text-primery font-bold mt-1 ">
                      ${search.price}
                    </p>
                    <BsFillTrashFill
                      color="#A71B4A"
                      size={18}
                      className="cursor-pointer mt-1"
                      onClick={() => dispatch(removeItem(search.id))}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
        {cart.length !== 0 ? (
          <div className="flex justify-center items-center pb-5">
            <Link to="/cartpage">
              <button className="border border-myRed text-myRed px-4 py-1 rounded-2xl mt-3 hover:bg-myRed hover:text-white">
                All Cart Items
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : null;
};

export default Cartmodal;
