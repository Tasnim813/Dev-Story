import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            {/* Animated Ring */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            
            {/* Text with subtle pulse */}
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 animate-pulse">
                    Finding your perfect stay...
                </h3>
                <p className="text-sm text-gray-400">Please wait a moment</p>
            </div>
        </div>
    );
};

export default Loading;