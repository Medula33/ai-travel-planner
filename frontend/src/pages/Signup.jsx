function Signup() {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-gray-900 p-10 rounded-2xl w-96 shadow-2xl">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-cyan-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-cyan-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6 bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-cyan-400"
        />

        <button className="w-full bg-cyan-400 text-black p-3 rounded font-bold hover:bg-cyan-300 transition">
          Register
        </button>

      </div>

    </div>
  );
}

export default Signup;