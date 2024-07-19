import BodyHomePage from "../components/BodyHomePage/BodyHomePage";
import ButtonLogin from "../components/Buttons/ButtonLogin";
import ButtonReview from "../components/Buttons/ButtonReview";
import ButtonSignUp from "../components/Buttons/ButtonSignUp";
import Logo from "../components/Logo/Logo";
import { useUserContext } from "../components/context/UserContext";

export default function HomePage() {
  const { user } = useUserContext();
  return user === null || user === "null" ? (
    <div>
      <div className="flex justify-between items-center mr-3 md:hidden">
        <Logo />
        <ButtonLogin />
      </div>
      <div>
        <BodyHomePage />
      </div>
      <div className="flex justify-center gap-7 mt-10 mb-10">
        <ButtonReview />
        <ButtonSignUp />
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between items-center mr-3 md:hidden">
        <Logo />
        <ButtonLogin />
      </div>
      <div>
        <BodyHomePage />
      </div>
      <div className="flex justify-center gap-7 mt-10 mb-10">
        <ButtonReview />
      </div>
    </div>
  );
}
