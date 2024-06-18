import { FaRegStar, FaStar } from "react-icons/fa";

function Rating({ rating }) {
  const star = rating.rate > 5 ? rating.rate - 1 : Math.floor(rating.rate);
  return (
    <div>
      <span className="flex">
        {(() => {
          switch (star) {
            case 1:
              return (
                <>
                  <FaStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                </>
              );

            case 2:
              return (
                <>
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                </>
              );
            case 3:
              return (
                <>
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                  <FaRegStar size={18} color="gold" />
                </>
              );
            case 4:
              return (
                <>
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                  <FaStar size={18} color="gold" />
                </>
              );
            default:
              return null;
          }
        })()}
      </span>
    </div>
  );
}

export default Rating;