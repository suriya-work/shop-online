import Card from '../card/Card';
import fashion from '/images/top.png'
import Cards from '../card/Cards';
// import Box from '../box/Box';
const HeroSection = () => {
    return (
        <>
            <div className='w-full'>
                <img src={fashion} alt="fashion"  className='w-full'/>
            </div>
            {/* <Box /> */}
            <Card titleName="Hot Products men's Clothing" firstName="men's clothing" />
            <Card titleName="Hot Products Jewelery" firstName="jewelery" />
            <Card titleName="Hot Products Electronics" firstName="electronics" />
            <Cards />
        </>
    )
}

export default HeroSection
