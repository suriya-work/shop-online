import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/features/products/productSlice";
import { BsFillTrashFill } from "react-icons/bs";
import Title from "../title/Title";
import { decrementQuantity, incrementQuantity, removeItem, removeCartItem } from "../../redux/features/products/productSlice";

function Cartpage() {
    const dispatch = useDispatch();
    const myData = useSelector((state) => state.product.cart);
    const total = useSelector((state) => state.product.total);
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <div className="cart-Page mb-[15rem]">
            <div className="block m-auto items-center justify-center">
                <Title>Shopping Cart</Title>
            </div>
            {/* <di className=""> */}
            <div className="container md:mx-auto md:ml-8 pl-2 pr-2 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-5">

                {myData.length === 0 ? (
                    <div className="flex flex-col justify-center items-center text-2xl">
                        <h2 className="font-bold text-center m-auto">Your Cart Is Empty!</h2>
                        <Link to="/">
                            <button className="border border-myRed text-myRed px-4 py-1 m-auto rounded-2xl mt-3 hover:bg-myRed hover:text-white">
                                Go To Shop!
                            </button>
                        </Link>
                    </div>
                ) : (
                    myData.map((item) => {
                        return (
                            <div className="border-t-[2px] border-t-myRed w-[100%] md:w-[73%] lg:w-[70%]">
                                <div className="flex  md:flex-row  justify-between items-center w-[100%] md:w-[73%] lg:w-[100%] mt-6">


                                    <div className=" w-[150px] h-[110px] mr-5 border rounded-[10px] px-4 py-1 mt-4">
                                        <Link to={`/products/${item.id}`}>
                                            <img src={item.image} alt="image" className="w-full h-full" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col w-[50%] mt-5">
                                        <p className="font-bold text-[16px] md:text-[20px] lg:pt-0 pt-3">{item.title}</p>
                                        <p className="font-bold text-[16px] text-[#A71B4A] mt-4">
                                            ${item.price}
                                        </p>

                                    </div>
                                    <div className="flex gap-8 md:ml-auto  items-center md:mt-28 mt-28">
                                        <BsFillTrashFill
                                            color="#A71B4A"
                                            size={18}
                                            className="cursor-pointer"
                                            onClick={() => dispatch(removeItem(item.id))}
                                        />
                                        <div className="flex gap-3">
                                            <button
                                                className="border w-[25px] h-[25px] font-bold rounded-full cursor-pointer"
                                                onClick={() => dispatch(incrementQuantity(item.id))}
                                            >
                                                +
                                            </button>
                                            <div className="font-bold">
                                                <p className="pt-1">
                                                    {item.quantity}
                                                </p>
                                            </div>
                                            <button
                                                className="border w-[25px] h-[25px] font-bold rounded-full cursor-pointer"
                                                onClick={() => dispatch(decrementQuantity(item.id))}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
                {myData.length !== 0 ? (
                    // <div className="">
                    <div className="w-[60%] h-[200px] md:w-[25%] rounded-[8px] m-auto md:h-[293px] flex flex-col  items-center justify-evenly md:fixed md:right-0 md:mr-1 lg:mr-24 lg:bottom-36">
                        <h2 className="font-bold text-[28px] text-center">Order Summary</h2>
                        <h2 className="font-bold text-[20px] text-center">Total Price</h2>
                        <h2 className="font-bold text-[#A71B4A] text-[20px] text-center">
                            ${parseFloat(total).toFixed(2)}
                        </h2>
                        <Link to="/finalpage">
                            <button
                                className="border border-myRed text-primery px-6 py-2 text-[20px] rounded-[10px] mt-3 hover:bg-myRed hover:text-white"
                                onClick={() => dispatch(removeCartItems())}
                            >
                                Purchase!
                            </button>
                        </Link>
                    </div>
                    // </div>
                ) : (
                    ""
                )}
            </div>
            {/* <div className="w-[25%] h-[293px] flex flex-col items-center justify-center fixed right-0 mr-5 mt-3 border-[2px] border-[#eee] rounded-[8px]">
                    <h2 className="font-bold text-[20px]">Total Price</h2>
                    <h2 className="font-bold text-myRed text-[18px]">${parseFloat(total).toFixed(2)}</h2>
                    <Link to='/finalpage'>
                        <button className="border border-myRed text-myRed px-4 py-1 rounded-[10px] mt-3 hover:bg-myRed hover:text-white" onClick={() => dispatch(removeCartItem())}>Purches!</button>
                    </Link>
                </div> */}
            {/* </di> */}

        </div>
    );
}

export default Cartpage;
