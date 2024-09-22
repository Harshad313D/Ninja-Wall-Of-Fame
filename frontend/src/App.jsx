import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ninjas")
      .then((res) => {
        setNinjas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div
      className="bg-orange-400 min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundColor: "#FF9800 ",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239294ac' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <h1 className="text-4xl p-4 font-bold mb-8">Ninja Wall of Fame</h1>
      <h3 className="text-xl text-indigo-800 font-bold mb-8 hover:text-indigo-600">
        Available Ninjas: {ninjas.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ninjas.map((ninja, index) => (
          <div
            key={ninja.id}
            className="bg-yellow-400 rounded-lg shadow-md p-6 max-w-sm"
          >
            <img
              src={ninja.photo} // Render the image
              alt={ninja.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{ninja.name}</h2>
            <p className="text-gray-600 mb-1">
              <strong className="text-indigo-600">Family Name:</strong>{" "}
              {ninja.familyName}
            </p>
            <p className="text-gray-600 mb-1">
              <strong className="text-indigo-600">Kekkei Genkai:</strong>{" "}
              {ninja.kekkeiGenkai ? ninja.kekkeiGenkai : "None"}
            </p>
            <p className="text-gray-600 mb-1">
              <strong className="text-indigo-600">Ninja Level:</strong>{" "}
              {ninja.ninjaLevel}
            </p>
            <div>
              <p className="text-indigo-600 font-bold mb-1">Special Jutsu:</p>
              <ul className="list-disc list-inside text-gray-600">
                {ninja.specialJutsu.map((jutsu, index) => (
                  <li key={index}>{jutsu}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
