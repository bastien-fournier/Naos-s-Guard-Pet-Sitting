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
      navigate("/login-page");
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  };

  return (
    <div className="flex flex-col  mx-auto max-w-sm border bg-white">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="my-4  flex items-center flex-col">
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-gray-500">
              Nom de famille
            </label>
            <input
              className="border border-99A2A5 rounded-sm "
              onChange={handleChange}
              value={register.lastname}
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-gray-500">
              Prénom
            </label>
            <input
              className="border border-99A2A5 rounded-sm "
              onChange={handleChange}
              value={register.firstname}
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500">
              Adresse mail
            </label>
            <input
              className="border border-99A2A5 rounded-sm "
              onChange={handleChange}
              value={register.email}
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-500">
              Mot de passe
            </label>
            <input
              className="border border-99A2A5 rounded-sm "
              onChange={handleChange}
              value={register.password}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            className="bg-secondary font-custom text-white px-3 py-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
