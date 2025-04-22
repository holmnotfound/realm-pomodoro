

import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../componments/NavBar/Navbar";
import Button from "../../componments/Button/Button";
import RealmContext from "../../componments/context/RealmContext";

function LandingPage() {
    const [showButtons, setShowButtons] = useState(true);
    /* const audioRef = useRef(new Audio("src/assets/music/dark-ambient-emotions-music-259996.mp3")); */
    const navigate = useNavigate();

    /* const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.loop = true;
            audioRef.current.play();
        }
    }; */

    const handleNavigate = () => {
        navigate('/ChooseRealm');
    };
    

    return (
        <section className="landing-page">
            <NavBar />
            {showButtons ? (
                <section>
                    <Button onClick={() => { setShowButtons(false);}} className="start-story" type="start-story" text='start story' />
                    <Button onClick={() => { handleNavigate(); }} type="skip-story" id="skip" text='skip story' />
                </section>
            ) : (
                <RealmContext />
            )}
        </section>
    );
}

export default LandingPage;


