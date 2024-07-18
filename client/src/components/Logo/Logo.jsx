import { Link } from "react-router-dom";

import LogoNaos from "../../assets/images/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.DivLogo}>
      <Link to="/">
        <img
          className="w-20 hover:scale-105 transform transition duration-300"
          src={LogoNaos}
          alt="Logo"
        />
      </Link>
    </div>
  );
}
