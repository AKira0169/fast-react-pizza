import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed";
  const className = {
    primary: `${base} py-3 px-5 md:py-4 md:px-6`,
    small: `${base} py-2 px-4  md:py-2.5 md:px-5 text-xs`,

    secondary: ` text-sm inline-block rounded-full  font-semibold border-2 border-stone-300  uppercase text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed py-2.5 px-5 md:py-3.5 md:px-6 `,
    round: `${base} px-2.5 py-1 md:px-3 md:py-2 text-sm`,
  };
  if (to) {
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={className[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className={className[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
