import React from 'react';
import { assets } from '../assets/assets';

function JobCard({ job }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-6 shadow-sm bg-white hover:shadow-md transition duration-200">
      {/* Header: Company Icon and Job Title */}
      <div className="flex items-center gap-4 mb-4">
        <img src={assets.company_icon} alt="Company" className="h-10 w-10 object-contain" />
        <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
      </div>

      {/* Location and Level */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{job.location}</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">{job.level}</span>
      </div>

      {/* Description */}
      <p
        className="text-sm text-gray-700 mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }}
      ></p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
        <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default JobCard;
