import { useState } from "react";

function AIPlanner() {

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [plan, setPlan] = useState("");

  const activities = [
    "Visit famous landmarks",
    "Try local food",
    "Explore markets",
    "Enjoy sightseeing",
    "Visit museums",
    "Take photos",
    "Go shopping",
    "Relax at beach",
    "Try adventure sports",
    "Explore nightlife"
  ];

  const generatePlan = () => {

    if (!destination || !days || !budget || !travelDate) {
      alert("Please fill all fields");
      return;
    }

    let itinerary = "";

    for (let i = 1; i <= days; i++) {

      const randomActivities = [];

      while (randomActivities.length < 3) {
        const act = activities[Math.floor(Math.random() * activities.length)];
        if (!randomActivities.includes(act)) {
          randomActivities.push(act);
        }
      }

      itinerary += `
Day ${i}:
• ${randomActivities[0]}
• ${randomActivities[1]}
• ${randomActivities[2]}
`;
    }

    const cost =
      budget === "Budget Friendly"
        ? days * 5000
        : budget === "Medium"
        ? days * 10000
        : days * 20000;

    setPlan(`
✈️ AI Travel Plan for ${destination}

🗓️ Travel Date: ${travelDate}
📅 Duration: ${days} Days
💰 Budget: ${budget}

📍 Itinerary:
${itinerary}

💵 Estimated Cost: ₹${cost}

🌟 Enjoy your trip!
    `);

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
        AI Travel Planner 🤖
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl">

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-4 mb-4 bg-gray-800 rounded-xl"
        />

        <input
          type="number"
          placeholder="No. of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-4 mb-4 bg-gray-800 rounded-xl"
        />

        {/* CALENDAR */}
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="w-full p-4 mb-4 bg-gray-800 rounded-xl"
        />

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-4 mb-4 bg-gray-800 rounded-xl"
        >

          <option value="">Select Budget</option>
          <option>Budget Friendly</option>
          <option>Medium</option>
          <option>Luxury</option>

        </select>

        <button
          onClick={generatePlan}
          className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold"
        >
          Generate AI Plan
        </button>

        {plan && (

          <pre className="mt-6 bg-black p-5 rounded-xl whitespace-pre-wrap">
            {plan}
          </pre>

        )}

      </div>

    </div>

  );

}

export default AIPlanner;