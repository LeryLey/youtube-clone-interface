import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
const App = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <Navbar />
      </div>
      <div className="col-span-12 h-full ">
        <div className="flex">
          <aside className="w-60 h-full bg-black">
            <Sidebar />
          </aside>
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default App;
