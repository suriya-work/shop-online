import girl1 from "/images/girl1.png";
import girl2 from "/images/girl2.png";
const Cards = () => {
  return (
    <div className="container w-full flex md:flex-row flex-col items-center gap-5 my-10">
      <img src={girl1} alt="card1" className="md:w-[60%] w-[280px] h-[300px] rounded-md"/>
      <img src={girl2} alt="card1" className="md:w-[60%] w-[280px] h-[300px] rounded-md"/>
    </div>
  );
};

export default Cards;
