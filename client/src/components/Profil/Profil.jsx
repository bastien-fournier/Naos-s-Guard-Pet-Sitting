import { useUserContext } from "../context/UserContext";

import Dog from "../../assets/images/dog.svg";

export default function Profil() {
  const { user } = useUserContext(); // Appel correct de useUserContext comme une fonction

  return (
    <div className="flex justify-center mt-28">
      <div className="flex flex-col items-center mx-auto max-w-sm border bg-white rounded-lg shadow-md p-4">
        <div>
          <img src={Dog} alt="Profil utilisateur" />
        </div>
        <p className="text-secondary">Bienvenue </p>
        <p className="text-secondary">{`${user.firstname} ${user.lastname}`}</p>
        <p className="text-secondary">Mon toutou (afficher nom ici)</p>
      </div>
    </div>
  );
}
