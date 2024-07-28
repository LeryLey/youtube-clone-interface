import { links } from "../constants";
import { you } from "../constants";
import { exploreLinks } from "../constants";
import { moreInfo } from "../constants";
import { Link } from "react-router-dom";
import { subscriptions } from "../constants";
import { IoChevronForward, IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { BsExclamationOctagon } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="px-4 overflow-auto h-[43rem] scrollbar-none scrollbar-track-transparent hover:scrollbar-thin scrollbar-thumb-zinc-400 ">
      <ul className="border-b border-zinc-600 pb-3 ">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
            >
              <span className=" text-zinc-100 flex">{link.icon}</span>
              <h2 className="text-base text-zinc-100">{link.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* Add your custom sidebar content here */}
      <ul className="border-b border-zinc-600 py-3 ">
        <div className="px-3 text-base text-zinc-100 flex items-center gap-3 py-2">
          <h2 className="text-lg font-medium">You</h2>
          <span>
            <IoChevronForward />
          </span>
        </div>
        {you.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
            >
              <span className=" text-zinc-100 ">{link.icon}</span>
              <h2 className="text-base text-zinc-100">{link.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* subscriptions  */}
      <ul className="py-3 border-b border-zinc-600 ">
        <div className="px-3 text-base text-zinc-100 flex items-center gap-3 py-2">
          <h2 className="text-lg font-medium">Subscription</h2>
        </div>
        {subscriptions.map((subscription, index) => (
          <li key={index}>
            <Link
              to={subscription.path}
              className="flex items-center gap-4 bg-transparent hover:bg-zinc-800 p-2 px-3 rounded-lg duration-300 ease-out "
            >
              <img
                src={subscription.img}
                alt="pf"
                className="w-7 h-7 rounded-full"
              />
              <h2 className="text-base text-zinc-100">{subscription.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* explorer  */}
      <ul className="border-b border-zinc-600 py-3">
        <div className="px-3 text-base text-zinc-100 flex items-center gap-3 py-2">
          <h2 className="text-lg font-medium">Explore</h2>
        </div>
        {exploreLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
            >
              <span className="text-zinc-100">{link.icon}</span>
              <h2 className="text-base text-zinc-100">{link.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* more information youtube */}
      <ul className="border-b border-zinc-600 py-3">
        <div className="px-3 text-base text-zinc-100 flex items-center gap-3 py-2">
          <h2 className="text-lg font-medium">More from YouTube</h2>
        </div>
        {moreInfo.map((info, index) => (
          <li key={index}>
            <Link
              to={info.path}
              className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
            >
              <span className="text-red-600">{info.icon}</span>
              <h2 className="text-base text-zinc-100">{info.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="border-b border-zinc-600 py-3">
        <li>
          <Link
            to={"/setting"}
            className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
          >
            <span className="text-zinc-100">
              <IoSettingsOutline size={22} />
            </span>
            <h2 className="text-base text-zinc-100">Settings</h2>
          </Link>
        </li>
        <li>
          <Link
            to={"/report-history"}
            className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
          >
            <span className="text-zinc-100">
              <MdOutlinedFlag size={22} />
            </span>
            <h2 className="text-base text-zinc-100">Report History</h2>
          </Link>
        </li>
        <li>
          <Link
            to={"/help"}
            className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
          >
            <span className="text-zinc-100">
              <GoQuestion size={22} />
            </span>
            <h2 className="text-base text-zinc-100">Help</h2>
          </Link>
        </li>
        <li>
          <Link
            to={"/setting"}
            className="flex items-center gap-4 bg-transparent hover:bg-zinc-700 p-2 px-3 rounded-lg duration-300 ease-out"
          >
            <span className="text-zinc-100">
              <BsExclamationOctagon size={22} />
            </span>
            <h2 className="text-base text-zinc-100">Send Feedback</h2>
          </Link>
        </li>
      </ul>
      <ul className=" py-3 flex flex-wrap gap-2 text-zinc-300 text-sm font-medium leading-3 px-3">
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/press'}>Press</Link>
        </li>
        <li>
          <Link to={'/copyright'}>Copyright</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/contact-us'}>Contact us</Link>
        </li>
        <li>
          <Link to={'/creator'}>Creator</Link>
        </li>
        <li>
          <Link to={'/advertise'}>Advertise</Link>
        </li>
        <li>
          <Link to={'/developer'}>Developer</Link>
        </li>
        <p className="font-light text-xs mt-2">© 2024 Google LLC</p>
      </ul>
    </div>
  );
};

export default Sidebar;
