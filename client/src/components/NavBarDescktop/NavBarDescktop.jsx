import { Link } from "react-router-dom";
import styles from "./NavBarDescktop.module.css";
import { useUserContext } from "../context/UserContext";

import Logo from "../Logo/Logo";

export default function NavBarDescktop() {
  const { user } = useUserContext();
  return user === null || user === "null" ? (
    <nav className={styles.divNav}>
      <Logo />
      <div className="flex items-center gap-16 mr-4">
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/review-page"
        >
          Avis
        </Link>
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/login-page"
        >
          Se connecter
        </Link>
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/sign-up-page"
        >
          S'inscrire
        </Link>
      </div>
    </nav>
  ) : (
    <nav className={styles.divNav}>
      <Logo />
      <div className="flex items-center gap-16 mr-4">
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/review-page"
        >
          Avis
        </Link>
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/login-page"
        >
          Se connecter
        </Link>
        <Link
          className="text-white hover:scale-105 transform transition duration-300"
          to="/profil-page"
        >
          {user.firstname}
        </Link>
      </div>
    </nav>
  );
}
