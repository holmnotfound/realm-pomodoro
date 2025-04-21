import { useRef } from "react";

function Button ({onClick, type, text}){

    const clickSound = useRef(new Audio('src/assets/music/interface-button-154180.mp3'))
    const soundEffect = () => {
        clickSound.current.currentTime = 0;
        clickSound.current.play();
        if(onClick) onClick();
    }

    

    return (
        <section className="button__wrapper">
            <button onClick={soundEffect} className={`button button--${type}`}>{text}</button>
        </section>
    )
}

export default Button