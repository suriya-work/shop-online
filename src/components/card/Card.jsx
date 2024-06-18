import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import AddToCartBtn from "../addtocartbtn/AddToCartBtn";
import Rating from "../rating/Rating";
// import AddToFavoriteBtn from "../addtofavorite/AddToFavoriteBtn";

const Card = (props) => {
 

  const dispatch = useDispatch();
  const myData = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountRate =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountRate.toFixed();
  }

  // filter search
  const searchMyData = myData
    .filter((items) => items.category === props.firstName)
    .slice(0, 4);
  return (
    <div className="container mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
      {searchMyData
        // .filter((cat) => cat.category === props.filterName)
        // .slice(0, 4)
        .map((item) => {
          return (
            <section
              className=" flex flex-col py-5 justify-around w-[280px] h-[370px] border bg-white rounded-md overflow-hidden cursor-pointer shadow-md"
              key={item.id}
            >
              <div className="flex justify-between items-center px-5">
                <MdFavoriteBorder size={21} className="text-Red" />

                {item.category === "jewelery" ? (
                  ""
                ) : (
                  <span className="bg-Red w-12 h-6 flex items-center justify-center text-white text-sm rounded-br-[10px] rounded-tl-[10px]">
                    %
                    {calculateDiscountPercentage(
                      item.price,
                      round(
                        item.price > 9 && item.price < 55
                          ? item.price - 5
                          : item.price - 50
                      )
                    )}
                  </span>
                )}
              </div>
              <div>
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="aks"
                    className="w-[130px] h-[130px] overflow-hidden mt-5 transition duration-300 ease-in-out hover:scale-110 m-auto"
                  />
                </Link>
              </div>

              {/* <div className=""> */}
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-center" title={item.title}>
                  {item.title.substring(0, 20)}...
                </p>

                <div className="flex justify-center gap-2">
                  <Rating rating={item.rating} />
                  <p className=" text-sm text-gray-400 hidden md:flex">
                    (
                    {round(
                      item.rating.rate > 4
                        ? Math.floor(item.rating.rate)
                        : item.rating.rate
                    )}
                    )
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center  gap-4">
                <p className="text-Red text-sm font-bold  ">
                  {item.category === "jewelery"
                    ? ""
                    : `$ ${round(
                        item.price > 9 && item.price < 55
                          ? item.price - 5
                          : item.price - 50
                      )}`}
                </p>
                <p
                  className={`text-gray-500 line-through text-sm font-bold ${
                    item.category === "jewelery" &&
                    " text-Red  no-underline  !ml-0"
                  }`}
                >
                  ${item.price}
                </p>
                {/* <span className="text-sm text-gray-500">
                  ({item.rating.count})
                </span> */}
              </div>
              {/* </div> */}
              <div className="flex items-center justify-center px-5">
                <button className="border bg-white text-black gap-2 w-full  rounded-md p-2 flex justify-center items-center  hover:bg-primery hover:text-white transition-all ease-linear duration-300">
                  <span>Add to cart</span>
                  <AddToCartBtn item={item} />
                </button>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default Card;
