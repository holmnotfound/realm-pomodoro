import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Button from "../Button/button";

function RealmContext() {
  const audioRef = useRef(new Audio("src/assets/music/dark-ambient-emotions-music-259996.mp3"));
  const navigate = useNavigate();

  
  useEffect(() => {
    audioRef.current.play();
    

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    };
  }, []);

  const handleNavigate = () => {
    navigate('/ChooseRealm');
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; 
  };

  return (
    <section className="realm-context">
      <p className="fade-in delay-1">In a world far far away, where time is of the essence.</p>
      <p className="fade-in delay-2">You must master the time before evil forces take over.</p>
      <p className="fade-in delay-3">Time awaits no one. Your journey begins now.</p>
      <Button onClick={() => { handleNavigate(); stopMusic(); }} type="start-journey fade-in delay-4" text='start journey' />
    </section>
  );
}

export default RealmContext;
