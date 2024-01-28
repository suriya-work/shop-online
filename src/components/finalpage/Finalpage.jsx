import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

function Finalpage() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-5 ">
        <div className=" flex text-4xl font-bold gap-5 ">
          <MdOutlineDone color="green" />
          <h2>Thanks For Your Shopping !</h2>
        </div>
        <Link to="/">
          <button className="border border-myRed text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white text-xl">
            Go Back To Shop !
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Finalpage;
