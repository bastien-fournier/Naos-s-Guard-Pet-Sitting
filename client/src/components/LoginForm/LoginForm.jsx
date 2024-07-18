import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

export default function LoginForm() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifyFail = (text) => toast.error(text);
  const notifySuccess = (text) => toast.success(text);
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const { login } = useUserContext();

  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(loginInfos),

        credentials: "include",
      });

      if (response.status === 200) {
        const user = await response.json();
        login(user.user);
        navigate("/profil-page");
        notifySuccess(`Bienvenue ${user.user.username}`);
      } else {
        // Gestion des erreurs
        const errorText = await response.text();
        setErrors(errorText);
        notifyFail("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Login failed:", error);
      notifyFail("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center mx-auto max-w-sm border bg-white rounded-lg shadow-md p-4">
        <div>
          <p className="text-secondary mb-3">Connexion</p>
        </div>
        <div>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                aria-required="true"
                type="email"
                id="email"
                name="email"
                value={loginInfos.email}
                onChange={(e) =>
                  setLoginInfos({ ...loginInfos, email: e.target.value })
                }
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                autoComplete="new-password"
                aria-required="true"
                type="password"
                id="password"
                name="password"
                value={loginInfos.password}
                onChange={(e) =>
                  setLoginInfos({ ...loginInfos, password: e.target.value })
                }
                placeholder="Mot de passe"
              />
            </div>
            {errors && <div>{errors}</div>}
            <button
              className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom mt-5 hover:scale-105 transform transition duration-300"
              type="submit"
            >
              Me connecter
            </button>
          </form>
        </div>
        <p className="text-secondary mt-3">Pas encore de compte ?</p>
        <p>
          <Link
            className="text-secondary underline hover:text-blue-500"
            to="/sign-up-page"
          >
            M'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
