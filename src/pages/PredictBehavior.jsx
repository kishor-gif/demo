import React, { useState } from "react";
import axios from "axios";

export default function PredictBehavior() {
  const [formData, setFormData] = useState({
    Acceleration_ms2: "",
    Speed_kmh: "",
    Throttle: "",
    Engine_Load: "",
    Fuel_Consumption: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate inputs before submitting
  const validateInputs = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        setError(`Error: ${key.replace("_", " ")} cannot be empty.`);
        return false;
      }
    }
    return true;
  };

  // Submit data to Flask backend
  const handleSubmit = async () => {
    if (!validateInputs()) return;
    try {
      const requestData = [
        {
          Acceleration_ms2: parseFloat(formData.Acceleration_ms2),
          Speed_kmh: parseFloat(formData.Speed_kmh),
          "Throttle_%": parseFloat(formData.Throttle),
          "Engine_Load_%": parseFloat(formData.Engine_Load),
          "Fuel_Consumption_L100km": parseFloat(formData.Fuel_Consumption),
        },
      ];

      console.log("Sending request data:", requestData);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict_risk",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Received prediction:", response.data);
      setPrediction(response.data.risk_score);
      setError(null);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to fetch prediction. Ensure Flask is running.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Driving Behavior Prediction</h2>
      
      {error && <p className="text-red-500 text-center">{error}</p>}

      <input
        type="number"
        name="Acceleration_ms2"
        placeholder="Acceleration (m/s²)"
        value={formData.Acceleration_ms2}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="number"
        name="Speed_kmh"
        placeholder="Speed (km/h)"
        value={formData.Speed_kmh}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="number"
        name="Throttle"
        placeholder="Throttle (%)"
        value={formData.Throttle}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="number"
        name="Engine_Load"
        placeholder="Engine Load (%)"
        value={formData.Engine_Load}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="number"
        name="Fuel_Consumption"
        placeholder="Fuel Consumption (L/100km)"
        value={formData.Fuel_Consumption}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Predict
      </button>

      {prediction !== null && (
        <p className="mt-4 text-green-600 text-center">
          Risk Score: <strong>{prediction}</strong>
        </p>
      )}
    </div>
  );
}