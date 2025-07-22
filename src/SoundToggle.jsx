import { useRef, useState } from "react";

export default function SoundToggle() {
  const audioRef = useRef(new Audio("/sound/MyFriend.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
    className="sound-toggle"
      onClick={toggleSound}
    >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20.6" cy="19.1" r="4.8" />
        <path d="M8.2,19.1a12.4,12.4,0,1,1,24.9,0c0,3.7-1.4,7.4-4.2,9.4C21.1,33.8,21.7,42.5,14.6,42.5c-6.5,0-6.5-5.8-6.5-5.8" />
        <path d="M34.7,32.2A19.2,19.2,0,0,0,34.2,5.5" />
      </svg>
    </div>
  );
}
