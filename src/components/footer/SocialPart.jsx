import React from "react";
import { socialMedia } from "../api/footer";
import { Link } from "react-router-dom";

const SocialPart = () => {


    return (
        <div className="ml-7 md:mt-0 xl:mt-0 lg:mr-12 xl:ml-12 2xl:ml-48">
            <div>
                <h2 className="text-[20px] font-bold sm:text-lg">be With Us</h2>
                <div className="flex gap-5 mt-3">
                    {socialMedia.map((SocialItem) => {
                        return (
                            <Link to={SocialItem.href} key={SocialItem.name}>
                                <a
                                    className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                    aria-label={SocialItem.name}
                                >
                                    <SocialItem.icon
                                        style={{
                                            fontSize: "2rem",
                                            color: "inherit",
                                        }}
                                    />
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-md sm:text-lg">Stay up to date with the latest discounts by emailing us</h2>
                <form
                    className="flex items-center flex-wrap sm:flex-nowrap mt-7"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className="w-full py-3 px-12  placeholder-gray-500 pl-[15px] outline-none rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg rounded-tr-lg rounded-br-lg shadow-md  focus:shadow-sm"
                        type="email"
                        placeholder="Please Enter Your Email"
                    />
                    <button
                        className="outline-none py-3 px-4 w-full text-[#fff] sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-[#A71B4A]    sm:rounded-tr-lg sm:rounded-br-lg"
                        type="button"
                    >
                        register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SocialPart;