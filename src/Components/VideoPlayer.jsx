import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, onValidated, validationPercent = 90 }) => {
  const [watchedPercent, setWatchedPercent] = useState(0);
  const [validated, setValidated] = useState(false);

  const handleProgress = ({ played }) => {
    const percent = Math.floor(played * 100);
    setWatchedPercent(percent);

    if (!validated && percent >= validationPercent) {
      setValidated(true);
      if (onValidated) onValidated();
    }
  };

  return (
    <div className="w-full h-full mx-auto">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
      />
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Watched: {watchedPercent}%</span>
        {validated && <span className="text-green-600 font-semibold">✅ Validated</span>}
      </div>
    </div>
  );
};

export default VideoPlayer;
