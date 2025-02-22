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
    <div className="flex justify-center mt-20">
      <div className="flex flex-col items-center mx-auto max-w-sm border bg-white rounded-lg shadow-md p-4">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={register.lastname}
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Nom de famille"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={register.firstname}
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Prénom"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={register.email}
                type="text"
                id="email"
                name="email"
                placeholder="Adresse mail"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={register.password}
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
              />
            </div>
            <button
              className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom mt-5 hover:scale-105 transform transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
