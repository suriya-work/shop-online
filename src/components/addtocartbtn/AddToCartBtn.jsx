import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "../../redux/features/products/productSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddToCartBtn({ item, className, children }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      })
    );
    toast.success(`🛒 Successfully Added To Cart!`, {
      className: "bottom-[80px] md:bottom-0 w-full",
    });
  };
  return (
    <>
      <button className={`${className}`} id="abc" onClick={handleClick}>
        <MdAddShoppingCart />
        {children}
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default AddToCartBtn;
