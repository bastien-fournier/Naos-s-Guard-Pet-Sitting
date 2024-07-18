import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function ButtonLogin() {
  const { user } = useUserContext();
  return user === null || user === "null" ? (
    <div>
      <Link to="/login-page">
        <button
          className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom"
          type="button"
        >
          Se connecter
        </button>
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/profil-page">
        <button
          className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom"
          type="button"
        >
          {user.firstname}
        </button>
      </Link>
    </div>
  );
}
