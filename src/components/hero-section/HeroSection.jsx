import Card from '../card/Card';
import fashion from '../../../public/images/fashion.png'
import Box from '../box/Box';
const HeroSection = () => {
    return (
        <>
            <div className='w-full'>
                <img src={fashion} alt="fashion"  />
            </div>
            <Box />
            <Card titleName="Hot Products men's Clothing" firstName="men's clothing" />
            <Card titleName="Hot Products Jewelery" firstName="jewelery" />
            <Card titleName="Hot Products Electronics" firstName="electronics" />
        </>
    )
}

export default HeroSection
