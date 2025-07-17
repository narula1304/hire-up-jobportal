import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

function Home() {
  const { searchfilter, issearched, setsearchfilter, jobs } = useContext(AppContext);

  const [currentpage, setcurrentpage] = useState(1);
  const jobsPerPage = 6;

  const [selectedcategory, setselectedcategory] = useState([]);
  const [selectedlocation, setselectedlocation] = useState([]);

  const [filteredjobs, setfilteredjobs] = useState([]);

  // ✅ Filter Handler Logic
  const handleCategorychange = (category) => {
    setselectedcategory((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handlelocationchange = (location) => {
    setselectedlocation((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
    );
  };

  // ✅ Filtering Logic
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchCategory =
        selectedcategory.length === 0 || selectedcategory.includes(job.category);

      const matchLocation =
        selectedlocation.length === 0 || selectedlocation.includes(job.location);

      const matchTitle =
        searchfilter.title === '' ||
        job.title.toLowerCase().includes(searchfilter.title.toLowerCase());

      const matchSearchLocation =
        searchfilter.location === '' ||
        job.location.toLowerCase().includes(searchfilter.location.toLowerCase());

      return matchCategory && matchLocation && matchTitle && matchSearchLocation;
    });

    setfilteredjobs(filtered);
    setcurrentpage(1); // Reset to page 1 when filters change
  }, [jobs, selectedcategory, selectedlocation, searchfilter]);

  // ✅ Pagination
  const startIdx = (currentpage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const paginatedJobs = filteredjobs.slice(startIdx, endIdx);
  const totalPages = Math.ceil(filteredjobs.length / jobsPerPage);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-6 py-6 gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-[300px]">
        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-100 space-y-6">
          {issearched && (searchfilter.title || searchfilter.location) && (
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">Current Search</h3>
              <div className="flex flex-wrap items-center gap-2">
                {searchfilter.title && (
                  <span className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                    {searchfilter.title}
                    <button
                      onClick={() => setsearchfilter((prev) => ({ ...prev, title: '' }))}
                      className="ml-2 px-1.5 py-0.5 bg-blue-200 hover:bg-blue-300 rounded-md"
                    >
                      <img src={assets.cross_icon} alt="remove" className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchfilter.location && (
                  <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                    {searchfilter.location}
                    <button
                      onClick={() => setsearchfilter((prev) => ({ ...prev, location: '' }))}
                      className="ml-2 px-1.5 py-0.5 bg-green-200 hover:bg-green-300 rounded-md"
                    >
                      <img src={assets.cross_icon} alt="remove" className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-3">Search by Categories</h4>
            <ul className="space-y-2">
              {JobCategories.map((category, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    onChange={() => handleCategorychange(category)}
                    checked={selectedcategory.includes(category)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <label className="cursor-pointer">{category}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Filter */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-3">Search by Location</h4>
            <ul className="space-y-2">
              {JobLocations.map((location, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    onChange={() => handlelocationchange(location)}
                    checked={selectedlocation.includes(location)}
                    className="form-checkbox h-4 w-4 text-green-600"
                  />
                  <label className="cursor-pointer">{location}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="flex-1 bg-white shadow-sm rounded-md p-4 md:p-6 border border-gray-100">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-2" id="joblist">Latest Jobs</h3>
          <p className="text-sm text-gray-600 mb-6">Get your desired job from top companies</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          {/* Pagination */}
          {filteredjobs.length > jobsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                disabled={currentpage === 1}
                onClick={() => setcurrentpage((prev) => prev - 1)}
                className="p-2 disabled:opacity-50"
              >
                <img src={assets.left_arrow_icon} alt="prev" className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <a href="#joblist" key={index}>
                  <button
                    onClick={() => setcurrentpage(index + 1)}
                    className={`px-3 py-1 text-sm rounded ${
                      currentpage === index + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                </a>
              ))}

              <button
                disabled={currentpage === totalPages}
                onClick={() => setcurrentpage((prev) => prev + 1)}
                className="p-2 disabled:opacity-50"
              >
                <img src={assets.right_arrow_icon} alt="next" className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
