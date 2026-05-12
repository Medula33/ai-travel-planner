function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Explore The World <br />
          With AI Travel Planning 🌍
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300">
          Discover destinations based on your mood, budget, and interests.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <input
            type="text"
            placeholder="Search destinations..."
            className="px-5 py-3 rounded-full w-72 text-black bg-white outline-none"
          />

          <button className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition">
            Explore Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;