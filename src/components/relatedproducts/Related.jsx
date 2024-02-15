import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/products/productSlice";
import { useDispatch } from "react-redux";
import AddToCartBtn from "../addtocartbtn/AddToCartBtn";

function Related({ data, singlePost }) {
  const dispatch = useDispatch();

  const relatedCategory = data.filter(
    (item) => item.category === singlePost.category
  );
  console.log(singlePost);
  return (
    <section className="container md:mb-0 mb-32">
      <p className="font-bold text-lg mt-12">YOU MIGHT ALSO LIKE THIS</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 ">
        {relatedCategory.slice(0, 4).map((item) => (
          <div key={item} className="grid grid-cols-2 gap-3 ">
            <Link to={`/products/${item.id}`}>
              <div className="overflow-hidden w-full h-[100px] ">
                <div className="w-full h-full flex justify-center items-center ">
                  <img
                    src={item.image}
                    alt="productImage"
                    className="max-w-[70%] h-full object-contain"
                  />
                </div>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold" title={item.title}>
                {item.title.substring(0, 12).toUpperCase()}...
              </p>
              <p className=" font-bold text-[#ff2e00]">${item.price}</p>
              <AddToCartBtn
                item={item}
                className="hover:text-white justify-center rounded-md hover:bg-primery hover:border-primery flex gap-2 items-center text-sm  border border-gray-500 px-1 py-1"
              >
                Add To Cart
              </AddToCartBtn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Related;
