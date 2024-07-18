import { Link } from "react-router-dom";

import LogoNaos from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          className="w-20 ml-2 hover:scale-105 transform transition duration-300"
          src={LogoNaos}
          alt="Logo"
        />
      </Link>
    </div>
  );
}
