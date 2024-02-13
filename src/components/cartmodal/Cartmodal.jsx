import { removeItem } from "../../redux/features/products/productSlice";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cartmodal = ({ cart, shown, close }) => {
  const dispatch = useDispatch();
  return shown ? (
    <>
      <div className="modal-backdrop" onClick={() => close()}>
        {" "}
      </div>
      <div
        className="bg-white w-[100%] h-[300px] lg:w-[20%] lg:h-[350px]  top-[90px]  shadow-2xl border rounded-md absolute z-10 lg:right-[100px] lg:top-[80px] overflow-y-scroll scrollbar-hide "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cart.length === 0 ? (
          <div className="h-full flex justify-center items-center text-2xl text-black  ">
            <h2>Your Cart Is Empty!</h2>
          </div>
        ) : (
          cart.slice(0, 3).map((search) => {
            return (
              <div
                className="flex items-center py-3 cursor-pointer pr-2 border-b-[1px] border-gray-200 mx-5"
                key={search.id}
              >
                <div>
                  <Link to={`/products/${search.id}`}>
                    <img
                      src={search.image}
                      alt=""
                      className="object-contain w-[50px] h-[50px]"
                    />
                  </Link>
                </div>
                <div className=" w-[80%] flex flex-col gap-2  ml-3">
                  <p className="text-black text-sm">
                    {search.title.substring(0, 25)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-semibold ">
                      ${search.price}
                    </p>
                    <BsFillTrashFill
                      color="red"
                      size={18}
                      className="cursor-pointer "
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
              <button className="border bg-primery px-4 py-1 rounded-md mt-2">
                View All Items
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  ) : (
    ""
  );
};

export default Cartmodal;
