import Card from "../card/Card";
import fashion from "/images/image-product.png";
import Cards from '../card/Cards';
// import Box from '../box/Box';
import BrandLogo from "../brand/BrandLogo";
const HeroSection = () => {
  return (
    <>
      <div className="container grid  lg:grid-cols-3 grid-rows-1 gap-4 items-center py-10">
        <div className="flex flex-col lg:items-start lg:text-start items-center text-center">
          <h1 className="text-black font-semibold lg:text-4xl pb-8">
            Collections
          </h1>
          <p className="text-gray-800 font-normal text-xl leading-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <div className="py-10">
            <button className="text-white bg-primery w-40 h-10 rounded-md text-center">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-2 ml-auto">
          <img
            src={fashion}
            alt="fashion"
            width={400}
            // height={200}
            className=""
          />
        </div>
      </div>
      <BrandLogo />
      {/* <Box /> */}
      <Card
        titleName="Hot Products men's Clothing"
        firstName="men's clothing"
      />
      <Card titleName="Hot Products Jewelery" firstName="jewelery" />
      <Card titleName="Hot Products Electronics" firstName="electronics" />
      <Cards />
    </>
  );
};

export default HeroSection;
