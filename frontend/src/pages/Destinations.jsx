function Destinations() {

  const places = [

    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      desc: "The city of lights and romance."
    },

    {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      desc: "Beautiful beaches and luxury resorts."
    },

    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      desc: "Modern technology meets tradition."
    }

  ];

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400 mb-10 text-center">
        Explore Destinations ✈️
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {places.map((place, index) => (

          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={place.image}
              alt={place.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-3xl font-bold text-cyan-400 mb-3">
                {place.name}
              </h2>

              <p className="text-gray-400">
                {place.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Destinations;