import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div className="flex flex-row justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5 mx-2">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold dark:text-slate-600 bg-amber-400 text-pink-800 py-1 px-2 rounded-lg mr-1">
              MOVIEDB
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
