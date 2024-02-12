import  { useEffect, useState } from "react";
// import Filtermodal from "../filterModule/Filtermodal";
import Filtermodal from '../filtermodule/Filtermodule'
import { useDispatch } from "react-redux";
// import { fetchAllProducts } from "../../redux/features/productSlice/productSlice";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { FiSearch } from "react-icons/fi";

function SerachBox({ products }) {
  const [search, setSearch] = useState("");
  const [searchMyData, setSearchMyData] = useState([]);
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = products.filter((items) =>
      items.title.toLowerCase().includes(search.toLowerCase())
    );
    if (inputData) {
      setSearchMyData(showData);
    } else {
      setSearchMyData("");
    }
  };

  return (
    <div>
      <form>
        <div className="relative ">
          <div className="absolute inset-y-0  flex items-center pr-3 pointer-events-none right-0">
          <FiSearch size={18} color="gray" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={searchHandler}
            autoComplete="off"
            id="default-search"
            className="rounded-md container py-[.8rem]  pr-[15rem]  lg:py-[6px]  lg:pr-12 lg:pl-2 outline-none text-sm text-gray-900 border"
            required
          />
        </div>
      </form>
      <Filtermodal
        searchMyData={searchMyData}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
    </div>
  );
}

export default SerachBox;