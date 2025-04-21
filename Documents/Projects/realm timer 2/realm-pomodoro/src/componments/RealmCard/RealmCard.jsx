import { useNavigate } from "react-router-dom";

function RealmCard({ title, img, alt, id }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/Pomodoro?realm=${id}`);
  };

  return (
    <section className="realm-item" id={id} onClick={handleNavigation}>
      <div className="realm-img-container">
        <img src={img} alt={alt} className="realm-img" />
        <h2 className="realm-title">{title}</h2>
      </div>
    </section>
  );
}

export default RealmCard;
