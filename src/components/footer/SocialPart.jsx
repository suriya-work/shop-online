import { socialMedia } from "../api/footer";
import { Link } from "react-router-dom";

const SocialPart = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-[20px] font-bold sm:text-lg">be With Us</h2>
        <div className="flex gap-5">
          {socialMedia.map((SocialItem) => {
            return (
              <Link to="#" key={SocialItem.name}>
                <a
                  className="px-1  hover:text-primery transition-opacity duration-300 ease-in-out"
                  aria-label={SocialItem.name}
                >
                  <SocialItem.icon
                    style={{
                      fontSize: "1.5rem",
                      color: "inherit",
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="">
        <h2 className="text-md sm:text-lg">
          Stay up to date with the latest discounts by emailing us
        </h2>
        {/* <form
          className="flex items-center flex-wrap sm:flex-nowrap mt-5 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-full py-3 px-12 md:px-28 placeholder-gray-500 pl-[15px] outline-none rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg rounded-tr-lg rounded-br-lg shadow-md  focus:shadow-sm"
            type="email"
            placeholder="Please Enter Your Email"
          />
          <button
            className="outline-none py-3 px-4 w-full text-[#fff] sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-[#A71B4A]   sm:rounded-tr-lg sm:rounded-br-lg"
            type="button"
          >
            register
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default SocialPart;
