import React, { useEffect, useState } from 'react';
import Title from '../title/Title';
import { IoIosStarOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/features/products/productSlice';
import { addToCart } from '../../redux/features/products/productSlice';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const dispatch = useDispatch();
    const myData = useSelector((state) => state.product.products);
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])


    // filter search
    const searchMyData = myData.filter((items) => items.category === props.firstName).slice(0, 4)
 
    return (
        <div className='container mx-auto pb-[5rem]'>
            <div className='text-center'>
                <Title>{props.titleName}</Title>
            </div>

            <div className='grid grid-cols sm:grid-cols md:grid-cols-2  lg:grid-cols-4 xl:mx-[14px] justify-center gap-7 cartItems'>
                {
                    searchMyData.map((item) => {
                        return (
                            <div key={item.id} className='border rounded-[30px] overflow-hidden w-[300px] h-[550px] p-5 hover:shadow-2xl cursor-pointer'>
                            
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.image} alt="api" className='w-[100%] h-[50%]' />
                                </Link>
                                <div className='flex justify-center pt-5'>
                                    <IoIosStarOutline size={14} color='#A71B4A' />
                                    <IoIosStarOutline size={14} color='#A71B4A' />
                                    <IoIosStarOutline size={14} color='#A71B4A' />
                                    <IoIosStarOutline size={14} color='#A71B4A' />
                                    <IoIosStarOutline size={14} color='#A71B4A' />
                                </div>
                                <p className='text-center text-[15px] text-black pt-7 truncate'>{item.title}</p>
                                <p className='text-center text-[14px] text-black pt-7'>{item.category}</p>
                                <div className=" text-center mb-10">
                                    <p
                                        className="text-[#A71B4A] text-[16px] font-bold mt-7"
                                
                                    >
                                        ${item.price}
                                    </p>
                                    <button title='Add To Cart'
                                        className="border text-black rounded-[20px] w-[150px] h-[40px] mt-6  font-bold hover:bg-myRed hover:text-white"
                    
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

export default Card
