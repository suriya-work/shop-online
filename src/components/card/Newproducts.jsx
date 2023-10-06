import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../redux/features/products/productSlice';
import Title from '../title/Title';
import { IoIosStarOutline } from 'react-icons/io';
import { addToCart } from '../../redux/features/products/productSlice';
import { Link } from 'react-router-dom';

const Newproducts = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.product.products)
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])
  const cartMyData = carts.filter((items) => items.category === "men's clothing")

  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <Title>Hot New Products</Title>
      </div>
      <div className='grid grid-cols sm:grid-cols md:grid-cols-2  lg:grid-cols-4  justify-center gap-7 cartItems'>
        {
          cartMyData.map((item) => {
            return (
              <div key={item.id} className='border rounded-[30px] overflow-hidden w-[300px] h-[550px] p-5 hover:shadow-2xl cursor-pointer'>
                <Link to={`/products/${item.id}`}>
                  <img src={item.image} alt="api" className='w-[100%] h-[50%]' />
                </Link>
                <div className='flex justify-center pt-5'>
                  <IoIosStarOutline size={14} color='red' />
                  <IoIosStarOutline size={14} color='red' />
                  <IoIosStarOutline size={14} color='red' />
                  <IoIosStarOutline size={14} color='red' />
                  <IoIosStarOutline size={14} color='red' />
                </div>
                <p className='text-center text-[15px] text-black pt-7 truncate'>{item.title}</p>
                <p className='text-center text-[14px] text-black pt-7'>{item.category}</p>
                <div className=" text-center mb-10">
                  <p
                    className="text-myRed text-[16px] font-bold mt-7"
                  // style={{
                  //     display: isActive ? "none" : "",
                  // }}
                  >
                    ${item.price}
                  </p>
                  <button title='Add To Cart'
                    className="border text-black rounded-[20px] w-[150px] h-[40px] mt-6 font-bold hover:bg-myRed hover:text-white"
                    // style={{
                    //     display: isActive ? "flex" : "",
                    // }}
                    onClick={() => dispatch(addToCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                    }))}
                  >

                    add to cart
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Newproducts
