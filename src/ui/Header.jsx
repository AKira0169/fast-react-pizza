import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-stone-200 bg-yellow-500 p-4 px-4 py-3 uppercase">
      <Link to="/" className="tracking-[.3em]">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
