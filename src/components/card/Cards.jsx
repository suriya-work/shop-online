import { CardBox } from "../api/CardBox";
const Cards = () => {
  return (
    <div className="container">
      <div>
        <h2 className="text-xl lg:text-3xl text-black font-semibold text-center my-10">
          Follow products and discounts on Instagram
        </h2>
      </div>
      <div className=" grid grid-cols-3 lg:grid-cols-6 items-center gap-5">
        {CardBox.map((item) => (
          <img key={item.id} src={item.image} alt="image" className=" rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default Cards;
