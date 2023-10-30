import React, { useState } from 'react';
import { FaHome, FaPlus, FaEnvelope, FaUser, FaTimes, FaBars, FaSave, FaBell } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="md:px-8 h-screen">
      
      {/* Logo (Visible on Small Screens) */}
      <div className="md:hidden text-black text-xl absolute top-4 left-8">
        Logo
      </div>

      <div className="md:hidden absolute top-6 right-8 z-[100]">
        <button onClick={toggleMenu} className="text-black text-xl z-[100]">
          {menuOpen ? <FaTimes className='text-white' /> : <FaBars/>}
        </button>
      </div>

      {/* Sidebar (Hidden on Small Screens) */}
      <div className="hidden md:block md:w-[12rem] md:min-h-screen text-black p-4">
        <div className="text-2xl font-semibold mb-12 mt-6">Logo</div>
        <nav>
          <ul className="space-y-5">
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer'>
              <a href="/" className="text-[1rem]">
                <FaHome className="inline-block mr-4 text-xl font-poppins text-green-800" /> Home
              </a>
            </li>
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer'>
              <button className="text-[1rem]" onClick={handleAddClick}>
                <FaPlus className="inline-block mr-4 text-xl font-poppin text-green-800" /> Add
              </button>
            </li>
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer'>
              <a href="/messages" className="text-[1rem]">
                <FaEnvelope className="inline-block mr-4 text-xl font-poppins text-green-800" /> Messages
              </a>
            </li>
            {isFormVisible && (
                <div className="fixed -top-5 left-0 w-full h-[100%] bg-black bg-opacity-50 flex justify-center items-center z-[100]" onClick={handleAddClick}>
                    <div className="bg-white h-[39rem] overflow-auto p-6 w-[30rem] rounded-lg shadow-md" onClick={(e) => e.stopPropagation()}>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-sm font-semibold text-gray-600">
                                    Are you sharing or requesting a bite?
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="request">Share</option>
                                    <option value="request">Request</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="type" className="block text-sm font-semibold text-gray-600">
                                    What is your bite's category
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="vegetables">Vegetables</option>
                                    <option value="nuts">Nuts&Seeds</option>
                                    <option value="proteins">Proteins</option>
                                    <option value="ready">Ready Meals</option>
                                    <option value="spices">Spices</option>
                                    <option value="dairy">Dairy Products</option>
                                    <option value="frozen">Frozen Products</option>
                                    <option value="vegan">Vegeterian and Vegan</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                                    Enter Your Bite's Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
                                    Describe Your Bite
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full h-32 border rounded-lg p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-sm font-semibold text-gray-600">
                                    What is your location?
                                </label>
                                <select
                                    id="location"
                                    name="location"
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="location1">Kigali, Rwanda</option>
                                    <option value="location2">KG 47 House 26</option>
                                    <option value="location2">Remera, Kigali, Rwanda</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="images" className="block text-sm font-semibold text-gray-600">
                                    Upload a photo of your bite
                                </label>
                                <input
                                    type="file"
                                    id="images"
                                    name="images"
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <label htmlFor="images" className="block text-center text-sm mb-6 font-semibold text-gray-600">
                                    or
                            </label>
                            <div className='flex flex-col justify-center items-center'>
                              <button type="button" className="bg-green-800 w-full text-white mb-2 px-4 py-2 rounded-lg">
                                  Open Camera
                              </button>
                              <button type="submit" className="mt-4 bg-blue-500 w-full text-white mb-6 px-4 py-2 rounded-lg">
                                  Submit
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} 
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer'>
              <a href="/saved" className="text-[1rem]">
                <FaSave className="inline-block mr-4 text-xl font-poppins text-green-800" /> Saved Bites
              </a>
            </li>
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer custom-tooltip'>
                <a className="text-[1rem]">
                    <FaBell className="inline-block mr-4 text-xl font-poppins text-green-800" /> Notifications
                    <span className="tooltip-text w-36">Coming Soon</span>
                </a>
            </li>
            <li className='flex items-center hover:bg-gray-300 p-2 rounded-lg cursor-pointer custom-tooltip'>
                <a className="text-[1rem]">
                    <FaUser className="inline-block mr-4 text-xl font-poppins text-green-800" /> Profile
                    <span className="tooltip-text w-36">Coming Soon</span>
                </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu Content */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="flex flex-col">
            <a className="text-white text-[1rem] my-7" href="/">
              <FaHome className="inline-block mr-4 text-xl font-poppins" /> Home
            </a>
            <a className="text-white text-[1rem] my-7" href="/">
              <FaPlus className="inline-block mr-4 text-xl font-poppins" /> Add
            </a>
            <a className="text-white text-[1rem] my-7" href="/">
              <FaEnvelope className="inline-block mr-4 text-xl font-poppins" /> Messages
            </a>
            <a className="text-white text-[1rem] my-7" href="/">
              <FaUser className="inline-block mr-4 text-xl font-poppins" /> Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}