import { useRef } from "react";

function SmallButton ({onClick, type, text}){

    const clickSound = useRef(new Audio('src/assets/music/interface-button-154180.mp3'))
    const soundEffect = () => {
        clickSound.current.currentTime = 0;
        clickSound.current.play();
        if(onClick) onClick();
    }

    

    return (
        <section className="small-button__wrapper">
            <button onClick={soundEffect} className={`small-button small-button--${type}`}>{text}</button>
        </section>
    )
}

export default SmallButton