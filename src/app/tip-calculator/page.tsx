"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  const calculateValues = () => {
    if (bill > 0 && people > 0) {
      const tipAmount = bill * (tip / 100);
      const total = bill + tipAmount;
      const tipEach = tipAmount / people;
      const totalEach = total / people;

      setTipPerPerson(tipEach);
      setTotalPerPerson(totalEach);

      console.log("Bill Amount:", bill);
      console.log("Tip Percentage:", tip);
      console.log("Number of People:", people);
      console.log("Tip Amount per Person:", tipEach.toFixed(2));
      console.log("Total per Person:", totalEach.toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl flex flex-col sm:flex-row">
        
        {/* Left Side - Input Fields */}
        <div className="sm:w-1/2 w-full p-4">
          <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center sm:text-left">Splitter</h1>

          <label className="block text-gray-600">Bill</label>
          <input
            type="number"
            className="w-full p-2 border rounded mb-4"
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
          />

          <label className="block text-gray-600">Select Tip %</label>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mb-4">
            {[5, 10, 15, 25, 50].map((percent) => (
              <button
                key={percent}
                className={`p-2 rounded text-white font-bold ${tip === percent ? "bg-teal-600" : "bg-teal-500"} transition duration-300`}
                onClick={() => setTip(percent)}
              >
                {percent}%
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom"
              className="p-2 border rounded text-center w-full"
              onChange={(e) => setTip(parseFloat(e.target.value) || 0)}
            />
          </div>

          <label className="block text-gray-600">Number of People</label>
          <input
            type="number"
            className="w-full p-2 border rounded mb-4"
            value={people}
            onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </div>

        {/* Right Side - Results */}
        <div className="sm:w-1/2 w-full bg-teal-700 text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-4">
              <span>Tip Amount / person</span>
              <span className="text-2xl font-bold">${tipPerPerson.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total / person</span>
              <span className="text-2xl font-bold">${totalPerPerson.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition duration-300 mb-3"
            onClick={calculateValues}
          >
            CALCULATE
          </button>

          <button
            className="w-full bg-gray-400 text-white p-3 rounded hover:bg-gray-500 transition duration-300"
            onClick={() => {
              setBill(0);
              setTip(0);
              setPeople(0);
              setTipPerPerson(0);
              setTotalPerPerson(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
