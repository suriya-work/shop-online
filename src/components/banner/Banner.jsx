import React from 'react'
import Card from '../card/Card';
// import { register } from "swiper/element/bundle";
import fashion from '../../../public/images/fashion-banner (2).png'
import Box from '../box/Box';
// register();
const Banner = () => {
    return (
        <>
            <div className='container mx-auto mt-5'>

            <img src={fashion} alt="fashion" />
            </div>
            <Box />
            {/* <div className="w-full mt-8 pt-16 container mx-auto">
                <swiper-container
                    speed="500"
                    loop="true"
                    Navigation
                    Autoplay
                    style={{
                        "--swiper-pagination-color": "#fff",
                        "--swiper-navigation-color": "#fff",
                    }}
                  
                >
                    <swiper-slide>
                        <img
                            src="https://images.vexels.com/content/197753/preview/online-store-sale-slider-template-a3cc06.png"
                            alt="slider"
                            className="w-full "
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg?w=900"
                            alt="slider"
                            className="w-full"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            src="https://images.vexels.com/content/197863/preview/handmade-online-shop-slider-template-7d508f.png"
                            alt="slider"
                            className="w-full"
                        />
                    </swiper-slide>
                </swiper-container>
            </div> */}
            <Card titleName="Hot Products men's Clothing" firstName="men's clothing" />
            <Card titleName="Hot Products Jewelery" firstName="jewelery" />
            <Card titleName="Hot Products Electronics" firstName="electronics" />
        </>
    )
}

export default Banner
