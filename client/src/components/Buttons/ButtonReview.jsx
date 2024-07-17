import { Link } from "react-router-dom";

export default function ButtonReview() {
  return (
    <div>
      <Link to="/review-page">
        <button
          className="flex items-center justify-center bg-primary  text-secondary  rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary"
          type="button"
        >
          Avis
        </button>
      </Link>
    </div>
  );
}
