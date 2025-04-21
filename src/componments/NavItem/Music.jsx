import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();
  const currentSrc = useRef("");

  const getMusicSourceFromRealm = (realm, pathname) => {
    const lowerPathname = pathname.toLowerCase();
  
    if (realm) {
      switch (realm) {
        case "void":
          return "src/assets/music/relaxing-music-fantasy-144015.mp3";
        case "highlands":
          return "src/assets/music/peaceful-fantasy-music-160729.mp3";
        case "citadel":
          return "src/assets/music/fantasy-music-lumina-143991.mp3";
        case "drakaria":
          return "src/assets/music/fantasy-forest-1-263881.mp3";
        default:
          return "src/assets/music/dark-ambient-emotions-music-259996.mp3";
      }
    }
  
    if (lowerPathname === "/chooserealm") {
      return "src/assets/music/dark-ambient-emotions-music-259996.mp3";
    }
  
    return null;
  };
  

  const fadeInAudio = (audio, duration = 2000) => {
    audio.volume = 0;
    const step = 1 / (duration / 16);
    const fade = () => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + step, 1);
        requestAnimationFrame(fade);
      }
    };
    fade();
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const realm = searchParams.get("realm");
    const pathname = location.pathname;

    const newSrc = getMusicSourceFromRealm(realm, pathname);

    if (!audioRef.current) return;

    if (currentSrc.current === newSrc && isPlaying) return;

    const audio = audioRef.current;
    audio.pause();
    audio.src = newSrc || "";
    audio.load();

    if (newSrc) {
      audio
        .play()
        .then(() => {
          fadeInAudio(audio);
          setIsPlaying(true);
          currentSrc.current = newSrc;
        })
    } else {
      setIsPlaying(false);
      currentSrc.current = "";
    }
  }, [location]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();
      fadeInAudio(audioRef.current);
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="music">
      <img
        onClick={toggleMusic}
        className="music__icon cursor-pointer"
        src="src/assets/img/musicIcon.png"
        alt="music icon"
      />
      <audio ref={audioRef} loop />
    </section>
  );
}

