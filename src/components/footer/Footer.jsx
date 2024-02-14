import { Link } from 'react-router-dom';
// import { BsFillSuitHeartFill } from "react-icons/bs";
// import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { footerContent } from "../api/footer";
import SocialPart from "./SocialPart";

const Footer = () => {
    return (
        <footer className="pl-[6rem] md:flex hidden mt-20 justify-between flex-wrap flex-grow min-width-[800px] lg:mr-3 xl:rtl:pl-50 border-t-[1px] border-slate-500/30">
            {footerContent.map((item) => {
                return (
                    <div className="mt-6 md:mt-0 lg:mt-6 leading-10" key={item.title}>
                        <h2 className="text-[20px] font-bold px-2">
                            {[item.title]}
                        </h2>
                        <div className="flex flex-col mt-2">
                            {item.subtitles.map((subItem) => {
                                return (
                                    <Link to="#" key={subItem.text}>
                                        <a className="text-sm hover:text-myRed font-bold text-[#282929] px-4 py-2">
                                            {[subItem.text]}
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <div className="">
                <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
                    <SocialPart />
                </div>
            </div>
        </footer>

    );
};

export default Footer;