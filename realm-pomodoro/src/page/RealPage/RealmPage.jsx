import NavBar from "../../componments/NavBar/Navbar";
import RealmList from "../../componments/RealmList/RealmList";
import RealmCard from "../../componments/RealmCard/RealmCard";

function RealmPage(){


    return(
        <section className="pick-realm">
            <NavBar />
            <h1 className="pick-realm--title">Pick A Realm</h1>
            <RealmList />
        </section>
    );
}

export default RealmPage