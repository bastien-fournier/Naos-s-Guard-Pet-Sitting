import ButtonDisconnected from "../components/Buttons/ButtonDisconnected";
import Logo from "../components/Logo/Logo";

import Profil from "../components/Profil/Profil";

export default function ProfilPage() {
  return (
    <div>
      <div className="flex mr-3 md:hidden">
        <Logo />
      </div>
      <div className="mt-36">
        <Profil />
        <ButtonDisconnected />
      </div>
    </div>
  );
}
