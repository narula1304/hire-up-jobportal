import React from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="h-10" />

      {/* Right Side - Auth Controls */}
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/applications"
            className="text-blue-600 font-medium hover:underline"
          >
            Applied Jobs
          </Link>
          <span className="text-gray-400">|</span>
          <p className="text-sm text-gray-700 hidden md:block">Hi, {user.firstName} {user.lastName}</p>
          <UserButton />
        </div>
      ) : (
        <div className="space-x-4">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Recruiter Login
          </button>
          <button
            onClick={openSignIn}
            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
