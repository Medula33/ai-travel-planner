import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully ✈️");

    setName("");
    setEmail("");
    setMessage("");

  };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-6">
          Contact Us 📩
        </h1>

        {/* CONTACT DETAILS */}
        <div className="bg-black border border-cyan-400 p-5 rounded-2xl mb-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Contact Details
          </h2>

          <p className="text-gray-300">📧 Email: support@aitravel.com</p>
          <p className="text-gray-300">📞 Phone: +91 9876543210</p>
          <p className="text-gray-300">📍 Location: Tamil Nadu, India</p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-gray-800 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-800 rounded-xl outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-gray-800 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  );

}

export default Contact;