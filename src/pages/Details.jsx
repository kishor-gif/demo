import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Detailbackground.jpeg";

const Details = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    otp: "",
    email: "",
    vehicleRegNo: "",
    licenseNo: "",
    vehicleType: "car",
    usageType: "personal",
  });

  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    alert(`Your OTP is: ${otp}`);
  };

  const verifyOTP = () => {
    if (formData.otp === generatedOTP) {
      setIsOtpVerified(true);
      alert("OTP Verified Successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const fetchVehicleData = async () => {
    if (!formData.vehicleRegNo) {
      alert("Enter a vehicle registration number first!");
      return;
    }

    try {
      const response = await fetch(
        `https://vahan.parivahan.gov.in/api/v1/vehicle-info?reg_no=${formData.vehicleRegNo}`
      );
      const data = await response.json();
      if (data.success) {
        alert(`Vehicle Data Fetched: ${JSON.stringify(data)}`);
      } else {
        alert("Invalid Registration Number or No Data Found.");
      }
    } catch (error) {
      alert("Error fetching vehicle data. Please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
          .input-field {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 4px;
          }
          .btn-blue {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
          }
          .btn-green {
            background-color: #28a745;
            color: white;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
          }
          .btn-blue:hover, .btn-green:hover {
            opacity: 0.8;
          }
          .background-container {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          @media (max-width: 768px) {
            .bg-white {
              width: 100%;
              padding: 20px;
            }
            .btn-blue, .btn-green {
              width: 100%;
            }
          }
        `}
      </style>
      <motion.div
        className="background-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            User Details
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="input-field"
                required
              />
              <button type="button" onClick={generateOTP} className="btn-blue mt-2">
                Send OTP
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">OTP</label>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="input-field"
              />
              <button type="button" onClick={verifyOTP} className="btn-green mt-2">
                Verify OTP
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Registration No.</label>
              <input
                type="text"
                name="vehicleRegNo"
                value={formData.vehicleRegNo}
                onChange={handleChange}
                className="input-field"
                required
              />
              <button type="button" onClick={fetchVehicleData} className="btn-green mt-2">
                Fetch Data from Parivahan
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Driving License No. (Optional)</label>
              <input
                type="text"
                name="licenseNo"
                value={formData.licenseNo}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
              <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="input-field">
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Usage Type</label>
              <select name="usageType" value={formData.usageType} onChange={handleChange} className="input-field">
                <option value="personal">Personal</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
          </form>
          <button type="submit" className="btn-blue w-full mt-6">
            Submit Details
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Details;




