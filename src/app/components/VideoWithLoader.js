'use client';

import { useState, useEffect, useRef } from 'react';

export default function VideoWithLoader() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      if (video) {
        console.log('Current readyState:', video.readyState);
        if (video.readyState > 3) {
          setIsVideoLoading(false); // Hide the loader when readyState > 3
          clearInterval(interval); // Stop checking once the condition is met
        }
      }
    }, 1000); // Check every 100ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="rounded-[50px] overflow-hidden w-72 h-96 lg:w-96 bg-[#FFD647] shadow-xl relative">
      {isVideoLoading && (
        <div className="absolute inset-0 flex items-center justify-center space-x-2 bg-black bg-opacity-50 z-10">
          <div className="loader w-3 h-3 bg-[ghostwhite] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[ghostwhite] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-[ghostwhite] rounded-full animate-bounce delay-300"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover object-[center_20%] ${isVideoLoading ? 'invisible' : 'visible'}`}
        autoPlay
        muted
        loop
      >
        <source src="/main1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
  );
}

