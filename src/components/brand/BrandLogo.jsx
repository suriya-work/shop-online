const BrandLogoItems = [
  {
    id: 1,
    image: "/images/brand-2.png",
  },
  {
    id: 2,
    image: "/images/brand-3.png",
  },
  {
    id: 3,
    image: "/images/brand-4.png",
  },
  {
    id: 4,
    image: "/images/01.png",
  },
  {
    id: 5,
    image: "/images/05.png",
  },
];

const BrandLogo = () => {
  return (
    <div className="container hidden lg:grid grid-cols-5 justify-items-center place-items-center my-10 gap-5">
      {BrandLogoItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="brand" width={130} />
        </div>
      ))}
    </div>
  );
};

export default BrandLogo;
