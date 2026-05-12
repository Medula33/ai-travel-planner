import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

      window.location.href =
        "http://localhost:5173/#/dashboard";

    } catch (error) {

      alert("Invalid Email or Password");

      console.log(error);

    }

  };

  return (

    <div className="h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-gray-900 p-10 rounded-2xl w-96 shadow-2xl">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-400 text-black p-3 rounded font-bold hover:bg-cyan-300 transition"
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;