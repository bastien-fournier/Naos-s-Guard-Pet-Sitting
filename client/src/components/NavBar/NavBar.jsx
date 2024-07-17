import { Link } from "react-router-dom";

import House from "../../assets/images/house.svg";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img src={House} alt="Retour à l'accueil" />
      </Link>
    </div>
  );
}
