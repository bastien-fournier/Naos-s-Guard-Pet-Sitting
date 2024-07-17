import { useUserContext } from "../context/UserContext";

export default function Profil() {
  const { user } = useUserContext(); // Appel correct de useUserContext comme une fonction

  return (
    <div>
      <p>Bienvenu {`${user.firstname} ${user.lastname}`}</p>
      {/* Utilisation de l'opérateur de chaînage optionnel pour éviter les erreurs si user est null ou undefined */}
    </div>
  );
}
