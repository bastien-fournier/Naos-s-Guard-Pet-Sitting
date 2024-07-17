import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function SignUpForm() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.info(register);
      const response = await fetch(`${ApiUrl}/api/users/registers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      console.info("Success:", data);
      navigate("/");
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lastname">Nom de famille</label>
          <input
            onChange={handleChange}
            value={register.lastname}
            type="text"
            id="lastname"
            name="lastname"
          />
          <label htmlFor="firstname">Prénom</label>
          <input
            onChange={handleChange}
            value={register.firstname}
            type="text"
            id="firstname"
            name="firstname"
          />
          <label htmlFor="email">Adresse mail</label>
          <input
            onChange={handleChange}
            value={register.email}
            type="text"
            id="email"
            name="email"
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            onChange={handleChange}
            value={register.password}
            type="password"
            id="password"
            name="password"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
