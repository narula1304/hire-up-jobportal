import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import kconvert from "k-convert"
import moment from "moment/moment";

function Applynowposter() {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);
  const [jobdata, setjobsdata] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  const fetchjob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setjobsdata(data[0]);
    }
    setLoading(false); // ✅ done loading
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchjob();
    }
  }, [id, jobs]);

  // ✅ Show loading animation
  if (loading) {
    return (
      <div className="w-full h-60 flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!jobdata)
    return <p className="text-center text-gray-500">Job not found</p>;

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-blue-50 border border-blue-400 rounded-lg px-6 py-15 flex justify-between items-center w-11/12 md:w-4/5 shadow-md">
        {/* Logo and Job Info */}
        <div className="flex items-center gap-6">
          <img
            src={assets.logo}
            alt="Company Logo"
            className="w-20 h-20 rounded-md bg-white p-2"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {jobdata.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <img src={assets.suitcase_icon} alt="" className="w-4" />
                <p>{jobdata.companyId.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={assets.location_icon} alt="" className="w-4" />
                <p>{jobdata.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={assets.person_icon} alt="" className="w-4" />
                <p>{jobdata.level}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={assets.money_icon} alt="" className="w-4" />
                <p>CTC: {kconvert.convertTo(jobdata.salary)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        {/* Apply Section */}
        <div className="flex flex-col items-end gap-2 mr-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Apply now
          </button>
          <p className="text-xs text-gray-500">Posted {moment(jobdata.date).fromNow()}</p>
        </div>
      </div>
    </div>
  );
}

export default Applynowposter;
