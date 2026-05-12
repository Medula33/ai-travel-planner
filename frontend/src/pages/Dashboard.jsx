import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const userData = localStorage.getItem("user");

  let user = null;

  try {

    user = userData ? JSON.parse(userData) : null;

  } catch (error) {

    console.log("User Parse Error");

  }

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <div className="flex justify-between items-center p-6 bg-gray-900 shadow-lg">

        <h1 className="text-3xl font-bold text-cyan-400">
          AI Travel Planner
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 py-2 rounded font-bold"
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div className="p-10">

        <h2 className="text-5xl font-bold mb-4">

          Welcome {user?.name || "Traveler"} ✈️

        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Your AI powered travel dashboard is ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              AI Planner
            </h3>

            <p className="text-gray-400">
              Get personalized travel recommendations.
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              Flights
            </h3>

            <p className="text-gray-400">
              Book flights and manage trips.
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              Destinations
            </h3>

            <p className="text-gray-400">
              Explore trending tourist attractions.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;