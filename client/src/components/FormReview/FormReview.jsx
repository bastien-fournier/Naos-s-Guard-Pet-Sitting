import { useState } from "react";

export default function FormReview() {
  const ApiUrl = import.meta.env.VITE_API_URL;

  const [reviewForm, setReviewForm] = useState({
    rate: "",
    comment: "",
    // user_id: "", // Ajout de l'utilisateur si nécessaire
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload();

    // Validation simple
    if (!reviewForm.rate || !reviewForm.comment) {
      setError("Tous les champs doivent être remplis.");
      setSuccess(null);
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/api/reviews/post-review`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la soumission de l'avis");
      }

      const data = await response.json();
      console.info("Success:", data);
      setSuccess("Avis soumis avec succès !");
      setError(null);

      // Réinitialisation du formulaire
      setReviewForm({
        rate: "",
        comment: "",
      });
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Erreur lors de la soumission de l'avis");
      setSuccess(null);
    }
  };

  return (
    <div className="flex justify-center mt-5 mb-5 ">
      <form
        className="bg-white p-4 rounded shadow-md w-full max-w-xs md:max-w-lg lg:max-w-xl"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Avis
          </label>
          <input
            onChange={handleChange}
            value={reviewForm.comment}
            type="text"
            id="comment"
            name="comment"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rate"
          >
            Note
          </label>
          <select
            value={reviewForm.rate}
            name="rate"
            id="rate"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Sélectionner une note</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button
          className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom mt-5 hover:scale-105 transform transition duration-300"
          type="submit"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}
