// import { addToFavorite } from "../../redux/features/productSlice/productSlice";
// import {addToFavorite} from '../../redux/features/products/productSlice'

import { toast } from "react-toastify";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function AddToFavoriteBtn({ item, className }) {
  const dispatch = useDispatch();
  const favoriteData = useSelector((state) => state.product.favorite);

  const handleClick = () => {
    const existingItem = favoriteData.find((i) => i.id === item.id);
    if (existingItem) {
      toast.warn(`🛒 It's already added to Favorites!`, {
        className: "bottom-[80px] md:bottom-0 w-full",
        position: "bottom-right",
      });
    } else {
      dispatch(
        AddToFavorite({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          rating: item.rating,
        })
      );
      toast.success(`🛒 Successfully Added To Favorites!`, {
        className: "bottom-[80px] md:bottom-0 w-full",
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <button className={`${className}`} id="abc" onClick={handleClick}>
        <MdFavoriteBorder size={19} className=" text-white" />
      </button>
    </>
  );
}

export default AddToFavoriteBtn;