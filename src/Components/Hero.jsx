import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets'; // assumes search_icon, location_icon, microsoft_logo, etc.
import { AppContext } from '../Context/AppContext';

function Hero() {

    const {setsearchfilter,setissearched} = useContext(AppContext)

    const titleref = useRef(null)
    const locationref = useRef(null)

    const onsearch = () => {
        setsearchfilter({
            title : titleref.current.value,
            location : locationref.current.value,
        })

        setissearched(true)
    }

  return (
    <div className="bg-blue-50 py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Your Next Big Career Move Starts Right Here — Explore the Best Job Opportunities and Take the First Step Toward Your Future!
        </p>

        {/* Search Box */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          {/* Job Search Input */}
          <div className="flex items-center bg-white rounded-md px-4 py-2 w-full md:w-80 shadow-sm">
            <img src={assets.search_icon} alt="Search" className="h-5 w-5 mr-2" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="w-full outline-none text-sm text-gray-700"
              ref={titleref}
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center bg-white rounded-md px-4 py-2 w-full md:w-64 shadow-sm">
            <img src={assets.location_icon} alt="Location" className="h-5 w-5 mr-2" />
            <input
              type="text"
              placeholder="Locations"
              className="w-full outline-none text-sm text-gray-700"
              ref={locationref}
            />
          </div>

          {/* Search Button */}
          <button onClick={onsearch} className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-sm text-gray-500 font-semibold uppercase mb-6">Trusted by</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img src={assets.microsoft_logo} alt="Microsoft" className="h-8 object-contain" />
          <img src={assets.walmart_logo} alt="Walmart" className="h-8 object-contain" />
          <img src={assets.accenture_logo} alt="Accenture" className="h-8 object-contain" />
          <img src={assets.samsung_logo} alt="Samsung" className="h-8 object-contain" />
          <img src={assets.amazon_logo} alt="Amazon" className="h-8 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
