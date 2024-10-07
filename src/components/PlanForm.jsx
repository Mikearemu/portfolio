import React, { useState } from 'react';
import { GoArrowSwitch } from "react-icons/go";
import Swal from 'sweetalert2';


const PlanForm = ({ selectedPlan, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear specific field error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate form fields
    if (!formData.name) newErrors.name = 'This field is required. Please input your name.';
    if (!formData.email) newErrors.email = 'This field is required. Please input your email.';
    if (!formData.company) newErrors.company = 'This field is required. Please input your company.';
    if (!formData.message) newErrors.message = 'This field is required. Please input your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set all form field errors
      return;
    }

    // Create payload with form data
    const payload = {
      access_key: '1167a560-8141-4e2d-96b9-9c7ff2f9680c', // Your Web3Forms API key
      ...formData,
      selectedPlan: selectedPlan.name,
      selectedPrice: selectedPlan.price,
    };

    try {
      // Send form data to the API
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      // Handle API response
      if (data.success) {
        Swal.fire({
          title: 'Good job!',
          text: 'Your message has been received!',
          icon: 'success'
        });

        setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'The Internet?',
        text: 'Please check your internet connection.',
        icon: 'question'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 p-6 ">
      <h3 className="text-white text-xl font-thin mb-4">Fill in your details</h3>

      {/* Display Selected Plan */}
      <div className="mb-4">
        <label className=" text-gray-800  block mb-2 text-left flex justify-between">
          Selected Plan: <a href="" className=' text-gray-100  p-2 bg-orange-600 '><GoArrowSwitch /></a>
        </label>
        <div className=" text-gray-100  p-2 bg-orange-600 w-fit">
          {selectedPlan.name} - ${selectedPlan.price}
        </div>
      </div>

      {/* Form Fields (Name, Email, Company) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Name Input */}
        <div>
          <label className=" text-gray-800  block mb-2 text-left">Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className={`w-full p-2 bg-transparent  text-gray-800  border-b ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            } focus:border-orange-500 outline-none`}
          />
          {errors.name && <p className="text-red-500 text-left text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className=" text-gray-800  block mb-2 text-left">Your Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={`w-full  text-gray-800  p-2 bg-transparent border-b ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            } focus:border-orange-500 outline-none`}
          />
          {errors.email && <p className="text-red-500 text-left text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Company Input */}
        <div>
          <label className=" text-gray-800  block mb-2 text-left">Your Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter your company name"
            className={`w-full  text-gray-800  p-2 bg-transparent border-b ${
              errors.company ? 'border-red-500' : 'border-gray-600'
            } focus:border-orange-500 outline-none`}
          />
          {errors.company && <p className="text-red-500 text-left text-sm mt-1">{errors.company}</p>}
        </div>
      </div>

      {/* Message Input (Full Width) */}
      <div className="mb-4">
        <label className=" text-gray-800  block mb-2 text-left">Tell me a little about the project *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Describe your project"
          className={`w-full  text-gray-800 p-2 bg-transparent border-b ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          } focus:border-orange-500 outline-none`}
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500 text-left text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="block w-fit px-10 text-center text-white bg-orange-600 hover:bg-orange-500 py-3">
        Send it Over
      </button>
    </form>
  );
};

export default PlanForm;
