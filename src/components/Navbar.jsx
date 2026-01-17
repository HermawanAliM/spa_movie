import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#94a4f6] px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        🎬 Movie Holic
      </Link>

      {/* Menu */}
      <div className="space-x-6">
        <NavLink to="/" className={({ isActive }) => `text-sm ${
              isActive ? "text-[#ffffdb]" : "text-gray-300"
            } hover:text-blue-950`
          }
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
