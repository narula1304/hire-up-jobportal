import React from 'react';
import { assets } from '../assets/assets';

function Appdownload() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 md:p-6 rounded-lg gap-4">
            {/* Text + Store Buttons */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    Download Mobile App For Better Experience
                </h1>
                <div className="flex justify-center md:justify-start gap-3">
                    <a href="#">
                        <img
                            src={assets.play_store}
                            alt="Download from Play Store"
                            className="w-32 hover:scale-105 transition-transform duration-200"
                        />
                    </a>
                    <a href="#">
                        <img
                            src={assets.app_store}
                            alt="Download from App Store"
                            className="w-32 hover:scale-105 transition-transform duration-200"
                        />
                    </a>
                </div>
            </div>

            {/* App Image */}
            <div className="flex-1 flex justify-center">
                <img
                    src={assets.app_main_img}
                    alt="App Screenshot"
                    className="w-full max-w-xs md:max-w-sm max-h-[300px] rounded-lg object-contain"
                />
            </div>
        </div>
    );
}

export default Appdownload;
