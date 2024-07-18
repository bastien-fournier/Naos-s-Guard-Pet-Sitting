import LoginForm from "../components/LoginForm/LoginForm";
import Logo from "../components/Logo/Logo";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-between items-center mr-3 md:hidden">
        <Logo />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <LoginForm />
      </div>
    </>
  );
}
