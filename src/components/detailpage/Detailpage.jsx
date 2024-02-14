import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/products/productSlice";
import { MdAddShoppingCart, MdFavoriteBorder } from "react-icons/md";
import Related from "../relatedproducts/Related";

const sizeListItems = [
  {
    size: "xs",
    isAvailable: false,
  },
  {
    size: "s",
    isAvailable: true,
  },
  {
    size: "m",
    isAvailable: true,
  },
  {
    size: "l",
    isAvailable: true,
  },
  {
    size: "xl",
    isAvailable: false,
  },
];

const ColorListItems = [
  {
    color: "bg-[#750430]",
    isAvailable: false,
  },
  {
    color: "bg-[#00a95d]",
    isAvailable: true,
  },
  {
    color: "bg-[#a2d2fc]",
    isAvailable: true,
  },
  {
    color: "bg-[#ff7a00]",
    isAvailable: false,
  },
];

function Detailpage() {
  // const navigat = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);
  const { productId } = useParams();

  const singlePost = data.find((item) => item.id === parseInt(productId));

  return (
    <section className="container max-h-max w-full mb-32">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
        key={singlePost.id}
      >
        <div className="overflow-hidden w-full h- flex justify-center items-center ">
          <div className="w-3/4 h-3/4 flex justify-center items-center ">
            <img
              src={singlePost.image}
              alt="productImage"
              className="w-5/6 h-5/6 object-contain"
            />
          </div>
        </div>

        <div className="w-full flex justify-center flex-col gap-8 ">
          <div>
            <p className="text-[30px] font-bold">{singlePost.title}</p>
            <span className="text-xl font-semibold text-gray-500">
              ${singlePost.price}
            </span>
          </div>
          {/* sizes */}
          <ul className="flex gap-5">
            <p>Size</p>
            {sizeListItems.map((item) => (
              <li
                key={item}
                className={`border px-3 py-1 rounded-md hover:shadow-md ${
                  !item.isAvailable && "text-gray-200"
                } `}
              >
                <button>{item.size.toUpperCase()}</button>
              </li>
            ))}
          </ul>

          {/* colors */}
          <div className="flex gap-5">
            <p>Color</p>
            {ColorListItems.map((item) => (
              <div
                key={item}
                className={`rounded-full w-5 h-5 hover:shadow-md cursor-pointer ${item.color} `}
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pl-4 w-full py-3 h-auto rounded-md bg-[#e9e9e9]">
            <p className="text-lg font-bold">${singlePost.price + 29}.98</p>
            <div className="w-[95%] border border-b-gray-300 mr-auto"></div>
            <p className="text-gray-500">+ Delivery = Total price</p>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="hover:text-white rounded-md hover:bg-primery hover:border-primery flex gap-2 items-center  border border-gray-500 px-5 py-3"
              id="abc"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: singlePost.id,
                    title: singlePost.title,
                    image: singlePost.image,
                    price: singlePost.price,
                  })
                )
              }
            >
              <MdAddShoppingCart />
              Add to cart
            </button>
            <button
              className="hover:text-white rounded-full hover:bg-red-500 hover:border-red-500 flex gap-2 items-center border border-gray-500 px-3 py-3"
              title="add to favorite"
            >
              <MdFavoriteBorder size={21} />
            </button>
            {/* <button onClick={() => navigat(-1)} className="hover:text-primery">
              back
            </button> */}
          </div>
        </div>
      </div>
      <Related data={data} singlePost={singlePost}/>
    </section>
  );
}

export default Detailpage;
