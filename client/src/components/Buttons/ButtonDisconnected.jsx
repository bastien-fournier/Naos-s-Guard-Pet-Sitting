import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

export default function ButtonDisconnected() {
  const { logout, user } = useUserContext();
  const ApiUrl = import.meta.env.VITE_API_URL;
  //

  const handleLogout = () => {
    logout(false);
  };

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/users/delete-user`, {
        method: "DELETE",

        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user.id }),
      });

      if (response.ok === true) {
        logout(true);
        notifySuccess("Votre profil est supprimé");
      } else {
        notifyFail("L'opération a échouée");
      }
    } catch (error) {
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom mt-5 hover:scale-105 transform transition duration-300"
        type="button"
      >
        Se déconnecter
      </button>
      <div>
        <button
          onClick={() => handleDelete(user.id)}
          type="button"
          className="flex items-center justify-center bg-primary  text-secondary  rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom hover:scale-105 transform transition duration-300 md:hidden"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
