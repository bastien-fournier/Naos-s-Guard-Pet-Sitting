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
      // console.log(response);

      if (response.status === 200) {
        const user = await response.json();
        login(user.user);
        navigate("/");
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
    <div>
      <div>
        <p>Me connecter</p>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <input
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
        <button type="submit">Soumettre</button>
      </form>
      <p>
        Pas encore de compte ?&nbsp;
        <Link to="/signUpPage">M'inscrire</Link>
      </p>
    </div>
  );
}
