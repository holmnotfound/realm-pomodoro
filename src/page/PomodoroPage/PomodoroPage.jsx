import NavBar from "../../componments/NavBar/Navbar";
import Timer from "../../componments/Timer/Timer";
import SmallButton from "../../componments/Button/SmallButton";
import { useNavigate } from "react-router-dom";

function PomodoroPage() {
    const navigate = useNavigate();
    const handleNavigate= () =>{
        navigate('/ChooseRealm')
    };

  return (
    <section>
        <NavBar />
        <Timer />
        
        <SmallButton onClick={handleNavigate} text="change realm" type="change-realm"/>
    </section>
  )
}

export default PomodoroPage;
