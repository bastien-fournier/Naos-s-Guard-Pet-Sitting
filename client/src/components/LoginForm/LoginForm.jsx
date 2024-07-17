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
    <div className="flex border flex-col text-center bg-white rounded-md ">
      <div>
        <p className="text-secondary">Connexion</p>
      </div>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <input
              className="border border-99A2A5 rounded-sm "
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
          <div>
            <input
              className="border border-99A2A5 rounded-sm"
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
            className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary mt-4"
            type="submit"
          >
            Me connecter
          </button>
        </form>
      </div>
      <p className="text-secondary">Pas encore de compte ?</p>
      <p>
        <Link className="text-secondary" to="/sign-up-page">
          M'inscrire
        </Link>
      </p>
    </div>
  );
}
