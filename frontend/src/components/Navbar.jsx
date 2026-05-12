import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3 text-2xl font-bold text-cyan-400 cursor-pointer">
            <FaPlaneDeparture />
            <h1>Travel Explorer</h1>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">

          <Link to="/">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>
          </Link>

          <Link to="/destinations">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Destinations
            </li>
          </Link>

          <Link to="/aiplanner">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              AI Planner
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>
          </Link>

        </ul>

        {/* Sign In Button */}
        <Link to="/login">
          <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
            Sign In
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;