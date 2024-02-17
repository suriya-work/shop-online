import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="container">
      <div className="md:flex hidden items-center justify-end">
        <Link to='/' className="flex items-center">
          <MdOutlineKeyboardBackspace size={20} />
          <span className="ml-1">Back to the website</span>
        </Link>
      </div>
      <div>
        <h2>Sign In</h2>
      </div>
    </div>
  );
}
