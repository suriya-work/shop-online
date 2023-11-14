import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/products/productSlice";
import { IoIosStarOutline , IoMdArrowRoundBack} from 'react-icons/io';

function Detailpage() {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { productId } = useParams();

  const singlePost = products.find((item) => item.id === parseInt(productId));
  return (
    <div
      className="container mx-auto overflow-x-hidden mt-32 w-full h-auto pb-[10rem] px-5"
      key={singlePost.id}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[40%] bg-[#fcfcfc] overflow-hidden border m-auto p-3 rounded-[16px] shadow-1xl hover:shadow-2xl ">
          <img
            src={singlePost.image}
            alt="productImage"
            className="w-[60%] m-auto"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] h-[100%] flex flex-col pt-8 m-auto">
          <p className="text-center lg:text-left font-bold text-[#464545]">BRAND NAME</p>
          <p className="text-[28px] font-bold text-center lg:text-left">{singlePost.title}</p>
          <div className='flex justify-center lg:justify-start pt-2'>
            <IoIosStarOutline size={18} color='red' />
            <IoIosStarOutline size={18} color='red' />
            <IoIosStarOutline size={18} color='red' />
            <IoIosStarOutline size={18} color='red' />
            <IoIosStarOutline size={18} color='red' />
           
          </div>
          <span className=" overflow-hidden pt-4">
            <p className="text-[16px] text-center lg:text-left">{singlePost.description}...</p>
          </span>
          <p className="text-Red text-[20px] font-bold mt-7 flex justify-center lg:justify-start ">${singlePost.price}
          </p>
          <div className="pt-[3rem] flex justify-between">
            <button className="pb-3" onClick={() => navigat(-1)}>
              <IoMdArrowRoundBack size={30} color="#969696" />
            </button>
            <button
              className="border bg-white pt-1 text-myRed rounded-2xl w-[150px] h-[50px]  justify-center items-center border-myRed  hover:bg-myRed  hover:text-white transition-all ease-linear duration-300  "
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
              add to cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Detailpage;
