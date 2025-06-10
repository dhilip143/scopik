import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, onValidated, validationPercent = 90 }) => {
  const [watchedPercent, setWatchedPercent] = useState(0);
  const [validated, setValidated] = useState(false);
  const playerRef = useRef(null);
  const maxWatchedRef = useRef(0);
  const isSeekingRef = useRef(false);

  const handleProgress = ({ playedSeconds, played }) => {
    const percent = Math.floor(played * 100);
    setWatchedPercent(percent);

    if (!isSeekingRef.current && playedSeconds > maxWatchedRef.current) {
      maxWatchedRef.current = playedSeconds;
    }

    if (!validated && percent >= validationPercent) {
      setValidated(true);
      if (onValidated) onValidated();
    }
  };

  const handleSeek = (seconds) => {
    if (seconds > maxWatchedRef.current) {
      // Prevent seeking forward beyond max watched time
      if (playerRef.current) {
        isSeekingRef.current = true;
        playerRef.current.seekTo(maxWatchedRef.current, 'seconds');
        setTimeout(() => {
          isSeekingRef.current = false;
        }, 100);
      }
    }
  };

  return (
    <div className="w-full h-full mx-auto">
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onSeek={handleSeek}
      />
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Watched: {watchedPercent}%</span>
        {validated && <span className="text-green-600 font-semibold">✅ Validated</span>}
      </div>
    </div>
  );
};

export default VideoPlayer;
