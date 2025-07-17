import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
    return (
        <div className="bg-white text-gray-800 py-6 px-4 mt-10 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Left section */}
                <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                    <img src={assets.logo} alt="Logo" className="h-8" />
                    <span className="hidden md:inline-block text-gray-400">|</span>
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Hire Up Job Portal. All rights reserved.
                    </p>
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4">
                    <a href="#" className="hover:opacity-70 transition">
                        <img src={assets.facebook_icon} alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                        <img src={assets.instagram_icon} alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                        <img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
