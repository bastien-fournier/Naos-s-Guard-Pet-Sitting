import { Link } from "react-router-dom";

export default function ButtonReview() {
  return (
    <div>
      <Link to="/review-page">
        <button
          className="flex items-center justify-center bg-primary  text-secondary  rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom hover:scale-105 transform transition duration-300 md:hidden"
          type="button"
        >
          Avis
        </button>
      </Link>
    </div>
  );
}
