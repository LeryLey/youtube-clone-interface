import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
import Logo from "/src/assets/yt.png";
import Profile from "/src/assets/user-profile.jpg";

const Navbar = ({toggle}) => {
  return (
    <nav className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggle}
          className="text-zinc-300 w-10 h-10 rounded-full bg-transparent hover:bg-white/10 flex items-center justify-center"
        >
          <IoMenuOutline size={30} />
        </button>
        <div className="relative flex items-center">
          <img src={Logo} alt="logo" className="w-10" />
          <h1 className="text-2xl text-white font-medium mr-1">YouTube</h1>
          <span id="country" className="text-sm text-gray-300">
            KH
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center h-10">
          <input
            type="text"
            name="research"
            placeholder="Search"
            className="bg-transparent border border-zinc-700 focus:border-blue-500 rounded-l-full h-full px-3 w-[35rem] outline-none text-zinc-100"
          />
          <button
            type="submit"
            className="rounded-r-full border-y border-r border-zinc-700 h-full text-base px-7 text-zinc-50 bg-zinc-800 hover:bg-zinc-700 duration-300"
          >
            <CiSearch size={20} />
          </button>
        </div>
        <button
          type="button"
          className="text-gray-100 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center"
        >
          <MdKeyboardVoice size={25} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-zinc-200 w-10 h-10 rounded-full bg-transparent hover:bg-white/10 flex items-center justify-center"
        >
          <RiVideoAddLine size={25} />
        </button>
        <button
          type="button"
          className="text-zinc-200 w-10 h-10 rounded-full bg-transparent hover:bg-white/10 flex items-center justify-center"
        >
          <IoMdNotificationsOutline size={25} />
        </button>
        <img
          src={Profile}
          alt="profile"
          className="w-8 h-8 bg-inherit rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
