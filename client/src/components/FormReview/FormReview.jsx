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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Avis</label>
        <input
          onChange={handleChange}
          value={reviewForm.comment}
          type="text"
          id="comment"
          name="comment"
        />
        <label htmlFor="rate">Note</label>
        <select
          value={reviewForm.rate}
          name="rate"
          id="rate"
          onChange={handleChange}
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
      <button type="submit">Soumettre</button>
    </form>
  );
}
