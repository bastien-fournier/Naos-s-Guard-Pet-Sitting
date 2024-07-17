import ButtonReview from "../components/Buttons/ButtonReview";
import ButtonSignUp from "../components/Buttons/ButtonSignUp";

export default function HomePage() {
  return (
    <div className="flex justify-center gap-7">
      <ButtonReview />
      <ButtonSignUp />
    </div>
  );
}
