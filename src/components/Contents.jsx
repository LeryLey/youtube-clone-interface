import { categories } from "../constants";
import { Link } from "react-router-dom";
import Videos from "./Videos";
const Contents = () => {
  return (
    <div className="p-4">
      {/* categories */}
      <ul className="flex flex-nowrap items-center gap-3 sticky top-0 bg-zinc-900 overflow-auto w-[calc(100% - 120px)] py-3">
        {categories.map((category) => (
          <li
            key={category.id}
            className="inline-flex bg-zinc-800 text-zinc-100 px-4 py-1 rounded-md"
          >
            <Link to={category.path}>{category.title}</Link>
          </li>
        ))}
      </ul>
      <>
        <Videos />
      </>
    </div>
  );
};

export default Contents;
