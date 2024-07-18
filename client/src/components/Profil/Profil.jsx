import { useUserContext } from "../context/UserContext";

export default function Profil() {
  const { user } = useUserContext(); // Appel correct de useUserContext comme une fonction

  return (
    <div>
      <div>
        <p>Bienvenu {`${user.firstname} ${user.lastname}`}</p>
      </div>
    </div>
  );
}
