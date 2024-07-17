import { Link } from "react-router-dom";

export default function ButtonSignUp() {
  return (
    <div>
      <Link to="/sign-up-page">
        <button
          className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary"
          type="button"
        >
          S'inscrire
        </button>
      </Link>
    </div>
  );
}
