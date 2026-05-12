import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {

    if (search.trim() !== "") {

      navigate("/destinations");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}

      <div className="flex justify-between items-center px-10 py-6 bg-gray-900 shadow-lg">

        <h1 className="text-3xl font-bold text-cyan-400">
          AI Travel Planner
        </h1>

        <div className="flex gap-6 text-lg">

          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/destinations" className="hover:text-cyan-400">
            Destinations
          </Link>

          <Link to="/aiplanner" className="hover:text-cyan-400">
            AI Planner
          </Link>

          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>

          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>

        </div>

      </div>

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center text-center px-6 pt-28">

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Explore The World ✈️
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mb-10">

          Plan smart journeys with AI-powered travel recommendations,
          destination discovery, and personalized trip planning.

        </p>

        {/* SEARCH BAR */}

        <div className="flex gap-4 mb-10 flex-wrap justify-center">

          <input
            type="text"
            placeholder="Search Destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 p-4 rounded-xl bg-gray-800 text-white outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-cyan-400 text-black px-6 rounded-xl font-bold hover:bg-cyan-300 transition"
          >
            Search
          </button>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-6 flex-wrap justify-center">

          <Link to="/destinations">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition">

              Explore Now

            </button>

          </Link>

          <Link to="/aiplanner">

            <button className="border border-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition">

              AI Planner

            </button>

          </Link>

        </div>

      </div>

      {/* POPULAR DESTINATIONS */}

      <div className="px-10 py-20">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-14">
          Popular Destinations 🌍
        </h2>

        {/* IMPORTANT FIX HERE */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PARIS */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Paris
              </h3>

              <p className="text-gray-400">
                Experience romance and iconic landmarks.
              </p>

            </div>

          </div>

          {/* MALDIVES */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
              alt="Maldives"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Maldives
              </h3>

              <p className="text-gray-400">
                Relax in tropical luxury resorts.
              </p>

            </div>

          </div>

          {/* TOKYO */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
              alt="Tokyo"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Tokyo
              </h3>

              <p className="text-gray-400">
                Discover futuristic city life and culture.
              </p>

            </div>

          </div>

          {/* SWITZERLAND */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop"
              alt="Switzerland"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Switzerland
              </h3>

              <p className="text-gray-400">
                Snowy mountains and scenic beauty.
              </p>

            </div>

          </div>

          {/* DUBAI */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop"
              alt="Dubai"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Dubai
              </h3>

              <p className="text-gray-400">
                Luxury lifestyle and skyscrapers.
              </p>

            </div>

          </div>

          {/* BALI */}

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
              alt="Bali"
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-3xl font-bold text-cyan-400 mb-3">
                Bali
              </h3>

              <p className="text-gray-400">
                Tropical paradise with beaches and temples.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;