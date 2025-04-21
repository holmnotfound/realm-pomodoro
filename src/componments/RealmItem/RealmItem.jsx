
import RealmCard from "../RealmCard/RealmCard"

function RealmItem() {
    const realms = [
        {
            id: "void",
            title: "The Void",
            img: "src/assets/img/thevoid.jpg",
            alt: "the void",
            path: "/Pomodoro"
        },
        {
            id: "highlands",
            title: "The Highlands",
            img: "src/assets/img/castlerealm.jpg",
            alt: "the highlands",
            path: "/Pomodoro"
        },
        {
            id: "citadel",
            title: "The Citadel",
            img: "src/assets/img/urbanFantasy.webp",
            alt: "the citadel",
            path: "/Pomodoro"
        },
        {
            id: "drakaria",
            title: "Drakaria",
            img: "src/assets/img/drakaria.jpg",
            alt: "drakaria",
            path: "/Pomodoro"
        },
    ]

    return (
        <section className="realm-items">
          {realms.map((realm) => {
            return(
                <RealmCard 
                key={realm.id}
                id={realm.id}
                title={realm.title}
                img={realm.img}
                alt={realm.alt}
                path={realm.path} 
              />  
            )
          })}
        </section>
      );

}

export default RealmItem