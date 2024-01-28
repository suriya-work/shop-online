import Card from '../card/Card';
import fashion from '../../../public/images/hero.jpg'
import Box from '../box/Box';
const HeroSection = () => {
    return (
        <>
            <div className='container grid sm:grid-cols-2 lg:grid-cols-2 mt-[50px]'>
                <div className='flex flex-col  justify-center items-center xl:items-start'>
                    <h1 className='text-black font-bold text-[30px] text-center lg:text-start'>Find the New Winter<br /> Trending Clothes In <br />The World</h1>
                    <p className='text-[14px] text-myRed font-medium text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Deleniti blanditiis possimus sit ipsam voluptate iste<br /> exercitationem fugit ipsa nihil voluptatem totam.</p>
                    <div className='mt-[20px]'>
                        <button className='text-white text-[14px] rounded-lg bg-RedLight px-[25px] py-[10px]'>Shop Now</button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img src={fashion} alt="fashion" className=' flex justify-end' />
                </div>
            </div>
            <Box />
            <Card titleName="Hot Products men's Clothing" firstName="men's clothing" />
            <Card titleName="Hot Products Jewelery" firstName="jewelery" />
            <Card titleName="Hot Products Electronics" firstName="electronics" />
        </>
    )
}

export default HeroSection
