import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import { toggleSidebar } from "./constants";
import { Link } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <Navbar toggle={Toggle} />
      </div>
      <div className="col-span-12 h-full b ">
        <div className="flex h-full ">
          {toggle ? (
            <aside className="w-72 overflow-auto">
              <Sidebar />
            </aside>
          ) : (
            <ul className="w-auto flex flex-col items-center">
              {toggleSidebar.map((sidebar) => [
                <li key={sidebar.id} className="p-4 text-sm">
                  <Link to={sidebar.path} className="flex flex-col items-center ">
                    <span className="text-xs text-zinc-100">{sidebar.icon}</span>
                    <h2 className="text-xs text-zinc-100">{sidebar.title}</h2>
                  </Link>
                </li>,
              ])}
            </ul>
          )}

          <main className="w-full h-[43rem] overflow-y-scroll scrollbar scrollbar-thumb-zinc-600 scrollbar-track-transparent ">
            <Contents />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
