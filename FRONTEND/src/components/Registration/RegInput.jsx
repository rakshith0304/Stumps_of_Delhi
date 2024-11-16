import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    dob: '',
    mobile: '',
    gameStyle: '' // Field for Game Style
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add any additional form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-200 text-gray-700">
                +91
              </span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                className="w-full p-2 border border-gray-300 rounded-r focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Game Style Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Game Style</label>
            <div className="flex flex-col">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gameStyle"
                  value="Batsman"
                  checked={formData.gameStyle === 'Batsman'}
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Batsman</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gameStyle"
                  value="Bowler"
                  checked={formData.gameStyle === 'Bowler'}
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Bowler</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gameStyle"
                  value="Allrounder"
                  checked={formData.gameStyle === 'Allrounder'}
                  onChange={handleChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Allrounder</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
